'use strict';

// Site editor: shows the preview site in an iframe (same origin, so we can let the owner
// click elements in it), sends change requests to /api/edit, and publishes/undoes via the API.

const $ = (id) => document.getElementById(id);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const JOB_KEY = 'cms-job';
const PAGE_KEY = 'cms-page';

const state = {
	previewUrl: null,
	liveUrl: null,
	started: false,
	busy: false, // a publish/discard/undo is in progress
	job: null, // the current change request
	changes: [],
	lastPublish: null,
	selecting: false,
	selection: null, // { el, label, description }
	pages: new Map([['/', 'Home']]),
	currentPath: null,
};

// ---------------------------------------------------------------- storage (best effort)

const store = {
	get(key) {
		try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
	},
	set(key, value) {
		try { value == null ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(value)); } catch {}
	},
};

// ---------------------------------------------------------------- API

class ApiError extends Error {
	constructor(message, status) {
		super(message);
		this.status = status;
	}
}

async function api(name, { body, query = '' } = {}) {
	const res = await fetch(`/api/${name}${query}`, {
		method: body ? 'POST' : 'GET',
		headers: body ? { 'Content-Type': 'application/json' } : {},
		body: body && JSON.stringify(body),
		credentials: 'same-origin',
	});
	let data = {};
	try { data = await res.json(); } catch {}
	if (res.status === 401 && name !== 'login') {
		showLogin();
		throw new ApiError(data.error || 'Please log in again', 401);
	}
	if (!res.ok) throw new ApiError(data.error || 'Something went wrong. Please try again.', res.status);
	return data;
}

// Resolves once the site at baseUrl is serving the given commit (Netlify finished deploying).
async function waitForDeploy(baseUrl, sha, timeoutMs = 6 * 60_000) {
	const deadline = Date.now() + timeoutMs;
	while (Date.now() < deadline) {
		try {
			const res = await fetch(`${baseUrl.replace(/\/$/, '')}/version.json?t=${Date.now()}`, { cache: 'no-store' });
			if ((await res.json()).commit === sha) return true;
		} catch {}
		await sleep(4000);
	}
	return false;
}

// ---------------------------------------------------------------- screens

function showOnly(id) {
	for (const screen of ['loading', 'login', 'editor']) $(screen).hidden = screen !== id;
}

function showLogin() {
	showOnly('login');
	$('password').value = '';
	$('password').focus();
}

async function boot() {
	let session;
	try {
		session = await api('session');
	} catch {
		$('loading').innerHTML = '<p class="muted">Couldn’t reach the editor. Check your connection and refresh the page.</p>';
		return;
	}
	state.previewUrl = session.previewUrl;
	state.liveUrl = session.liveUrl;

	// The editor has to run on the preview site so it can look inside the preview pages.
	const previewOrigin = new URL(session.previewUrl).origin;
	if (location.origin !== previewOrigin) {
		location.replace(`${previewOrigin}/admin/`);
		return;
	}

	if (session.loggedIn) startEditor();
	else showLogin();
}

$('login-form').addEventListener('submit', async (event) => {
	event.preventDefault();
	const button = event.submitter;
	button.disabled = true;
	$('login-error').hidden = true;
	try {
		await api('login', { body: { password: $('password').value } });
		startEditor();
	} catch (err) {
		$('login-error').textContent = err.message;
		$('login-error').hidden = false;
	} finally {
		button.disabled = false;
	}
});

function startEditor() {
	showOnly('editor');
	if (state.started) {
		refreshChanges();
		return;
	}
	state.started = true;

	const frame = $('frame');
	frame.addEventListener('load', onFrameLoad);
	frame.src = store.get(PAGE_KEY) || '/';
	setInterval(trackFramePath, 500);

	$('open-live').href = state.liveUrl || '#';
	$('open-live').hidden = !state.liveUrl;

	refreshChanges();

	const saved = store.get(JOB_KEY);
	if (saved) {
		state.job = saved;
		renderJob();
		if (!isFinal(saved.phase)) pollJob(saved);
	}
}

// ---------------------------------------------------------------- the preview iframe

const frameDoc = () => {
	try { return $('frame').contentDocument; } catch { return null; } // null if it navigated off-site
};

const FRAME_STYLES = `
	html.cms-selecting, html.cms-selecting * { cursor: crosshair !important; }
	.cms-hover { outline: 2px dashed #fbbf24 !important; outline-offset: 2px !important; }
	.cms-selected { outline: 3px solid #fbbf24 !important; outline-offset: 2px !important; }
`;

function onFrameLoad() {
	const doc = frameDoc();
	if (!doc) return;

	const style = doc.createElement('style');
	style.textContent = FRAME_STYLES;
	doc.head.appendChild(style);

	// Capture phase, so selecting doesn't also click links/buttons on the page.
	for (const type of ['click', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'submit']) {
		doc.addEventListener(type, (event) => {
			if (!state.selecting) return;
			event.preventDefault();
			event.stopPropagation();
			if (type === 'click') selectElement(event.target);
		}, true);
	}
	doc.addEventListener('mouseover', (event) => {
		if (!state.selecting) return;
		doc.querySelectorAll('.cms-hover').forEach((el) => el.classList.remove('cms-hover'));
		event.target.classList.add('cms-hover');
	}, true);
	doc.addEventListener('keydown', onKeydown);

	setSelecting(state.selecting);
	trackFramePath();
}

function trackFramePath() {
	const doc = frameDoc();
	if (!doc) return;
	const path = doc.location.pathname;

	collectPages(doc);
	if (path === state.currentPath) return;

	state.currentPath = path;
	store.set(PAGE_KEY, path);
	$('current-page').textContent = path;
	$('open-preview').href = state.previewUrl.replace(/\/$/, '') + path;
	clearSelection();
	renderPageSelect();
}

// Builds the page menu from the links the site itself shows (so new pages appear automatically).
function collectPages(doc) {
	let added = false;
	for (const link of doc.querySelectorAll('a[href]')) {
		const url = new URL(link.href, doc.location.href);
		if (url.origin !== location.origin || url.pathname.startsWith('/admin')) continue;
		const name = link.textContent.trim().replace(/\s+/g, ' ').slice(0, 40);
		// Replace placeholder names (the bare path) once a real link label turns up.
		if (name && (!state.pages.has(url.pathname) || state.pages.get(url.pathname) === url.pathname)) {
			state.pages.set(url.pathname, name);
			added = true;
		} else if (!state.pages.has(url.pathname)) {
			state.pages.set(url.pathname, url.pathname);
			added = true;
		}
	}
	if (added) renderPageSelect();
}

function renderPageSelect() {
	const select = $('page-select');
	const current = state.currentPath || '/';
	if (!state.pages.has(current)) state.pages.set(current, current);
	select.replaceChildren(...[...state.pages].map(([path, name]) => {
		const option = new Option(path === '/' ? 'Home' : `${name} (${path})`, path);
		option.selected = path === current;
		return option;
	}));
}

$('page-select').addEventListener('change', (event) => {
	$('frame').src = event.target.value;
});

$('reload').addEventListener('click', reloadFrame);

function reloadFrame() {
	try { $('frame').contentWindow.location.reload(); } catch { $('frame').src = state.currentPath || '/'; }
}

$('view-desktop').addEventListener('click', () => setView(false));
$('view-phone').addEventListener('click', () => setView(true));

function setView(phone) {
	$('frame-wrap').classList.toggle('phone', phone);
	$('view-phone').classList.toggle('active', phone);
	$('view-desktop').classList.toggle('active', !phone);
}

// ---------------------------------------------------------------- selecting an element

$('select-toggle').addEventListener('click', () => setSelecting(!state.selecting));
$('selection-clear').addEventListener('click', clearSelection);
document.addEventListener('keydown', onKeydown);

function onKeydown(event) {
	if (event.key === 'Escape' && state.selecting) setSelecting(false);
}

function setSelecting(on) {
	state.selecting = on;
	$('select-toggle').classList.toggle('active', on);
	$('select-hint').hidden = !on;
	const doc = frameDoc();
	if (doc) {
		doc.documentElement.classList.toggle('cms-selecting', on);
		if (!on) doc.querySelectorAll('.cms-hover').forEach((el) => el.classList.remove('cms-hover'));
	}
}

function selectElement(el) {
	clearSelection();
	el.classList.remove('cms-hover');
	el.classList.add('cms-selected');
	state.selection = { el, ...describe(el) };
	$('selection-label').textContent = state.selection.label;
	$('selection').hidden = false;
	setSelecting(false);
	$('request').focus();
}

function clearSelection() {
	state.selection?.el.classList.remove('cms-selected');
	state.selection = null;
	$('selection').hidden = true;
}

// What we tell Claude about the clicked element: where its markup is defined, its text and HTML.
function describe(el) {
	const tag = el.tagName.toLowerCase();
	const source = el.closest('[data-src]')?.getAttribute('data-src') || 'unknown';
	const text = (el.innerText || '').trim().replace(/\s+/g, ' ');
	let html = el.outerHTML.replace(/\sdata-src="[^"]*"/g, '').replace(/\scms-(hover|selected)/g, '');
	if (html.length > 1500) html = `${html.slice(0, 1500)}…`;

	let label;
	if (tag === 'img') label = `Image${el.alt ? `: “${el.alt}”` : ''}`;
	else if (text) label = `“${text.length > 90 ? `${text.slice(0, 90)}…` : text}”`;
	else label = `A ${tag} element`;

	const description = [
		`Source location: ${source} (where this element's markup is written; its text may be passed in from the page file)`,
		`Element: <${tag}>`,
		text && `Visible text: ${text.slice(0, 500)}`,
		`HTML: ${html}`,
	].filter(Boolean).join('\n');

	return { label, description: description.slice(0, 3900) };
}

// ---------------------------------------------------------------- change requests

const FINAL_PHASES = ['changed', 'needs_clarification', 'declined', 'no_change', 'failed'];
const isFinal = (phase) => FINAL_PHASES.includes(phase);
const jobRunning = () => state.job && !isFinal(state.job.phase);

$('request-form').addEventListener('submit', async (event) => {
	event.preventDefault();
	const text = $('request').value.trim();
	if (!text) return;
	const ok = await startJob({
		prompt: text,
		shown: text,
		page: state.currentPath || '/',
		element: state.selection?.description || '',
	});
	if (ok) {
		$('request').value = '';
		clearSelection();
	}
});

$('reply-form').addEventListener('submit', async (event) => {
	event.preventDefault();
	const answer = $('reply').value.trim();
	const previous = state.job;
	if (!answer || !previous) return;
	const ok = await startJob({
		prompt: `${previous.prompt}\n\nYou asked: ${previous.message}\nMy answer: ${answer}`,
		shown: answer,
		page: previous.page,
		element: previous.element,
	});
	if (ok) $('reply').value = '';
});

$('job-dismiss').addEventListener('click', () => {
	state.job = null;
	store.set(JOB_KEY, null);
	renderJob();
});

async function startJob({ prompt, shown, page, element }) {
	if (jobRunning() || state.busy) {
		toast('Please wait for the current change to finish.');
		return false;
	}
	setSending(true);
	try {
		const { requestId } = await api('edit', { body: { prompt, page, element } });
		state.job = { requestId, prompt, shown, page, element, phase: 'queued', startedAt: Date.now() };
		store.set(JOB_KEY, state.job);
		renderJob();
		pollJob(state.job);
		return true;
	} catch (err) {
		toast(err.message);
		return false;
	} finally {
		setSending(false);
	}
}

async function pollJob(job) {
	while (state.job === job) {
		let status;
		try {
			status = await api('status', { query: `?requestId=${encodeURIComponent(job.requestId)}` });
		} catch (err) {
			if (err.status === 401) return;
			await sleep(5000);
			continue;
		}

		if (status.state !== 'done') {
			updateJob(job, { phase: status.state });
			await sleep(4000);
			continue;
		}

		if (status.status === 'changed') {
			updateJob(job, { phase: 'deploying', message: status.summary });
			const deployed = await waitForDeploy(location.origin, status.previewSha);
			reloadFrame();
			refreshChanges();
			updateJob(job, {
				phase: 'changed',
				message: deployed ? status.summary : `${status.summary}\n\nThe preview is taking longer than usual to update. Press Reload in a minute.`,
			});
		} else {
			updateJob(job, { phase: status.status, message: status.summary });
		}
		return;
	}
}

function updateJob(job, changes) {
	Object.assign(job, changes);
	if (state.job !== job) return;
	store.set(JOB_KEY, job);
	renderJob();
}

const JOB_VIEW = {
	queued: { title: 'Getting started…', tone: '' },
	running: { title: 'Claude is making your change…', tone: '' },
	deploying: { title: 'Updating the preview…', tone: '' },
	changed: { title: 'Done. Check the preview', tone: 'ok' },
	no_change: { title: 'Nothing needed changing', tone: 'warn' },
	needs_clarification: { title: 'Claude has a question', tone: 'warn' },
	declined: { title: 'Couldn’t make that change', tone: 'warn' },
	failed: { title: 'Something went wrong', tone: 'bad' },
};

function renderJob() {
	const job = state.job;
	$('job').hidden = !job;
	setSending(false);
	if (!job) return;

	const view = JOB_VIEW[job.phase] || JOB_VIEW.failed;
	$('job').className = `panel-section job ${view.tone}`;
	$('job-title').textContent = view.title;
	$('job-spinner').hidden = isFinal(job.phase);
	$('job-request').textContent = `“${job.shown}”`;
	$('job-message').textContent = job.message || (job.phase === 'running' ? `${elapsed(job)} · usually about a minute` : '');
	$('reply-form').hidden = job.phase !== 'needs_clarification';
	$('job-dismiss').hidden = !isFinal(job.phase) || job.phase === 'needs_clarification';
	if (job.phase === 'needs_clarification') $('reply').focus();
}

const elapsed = (job) => `${Math.round((Date.now() - job.startedAt) / 1000)}s`;
setInterval(() => { if (state.job?.phase === 'running' && !state.job.message) renderJob(); }, 1000);

function setSending(sending) {
	const blocked = sending || jobRunning() || state.busy;
	$('send').disabled = blocked;
	$('send').textContent = jobRunning() ? 'Working…' : 'Send';
	$('publish').disabled = blocked || state.changes.length === 0;
	for (const id of ['discard', 'undo']) $(id).disabled = blocked;
}

// ---------------------------------------------------------------- publish / discard / undo

async function refreshChanges() {
	try {
		const { changes, lastPublish } = await api('changes');
		state.changes = changes;
		state.lastPublish = lastPublish;
	} catch {
		return;
	}
	const list = $('changes');
	list.replaceChildren(...state.changes.map((change) => {
		const li = document.createElement('li');
		const title = document.createElement('div');
		title.className = 'title';
		title.textContent = change.title;
		const summary = document.createElement('div');
		summary.className = 'summary';
		summary.textContent = change.summary;
		li.append(title, summary);
		return li;
	}));
	const count = state.changes.length;
	$('changes-count').textContent = count;
	$('changes-count').classList.toggle('has', count > 0);
	$('changes-empty').hidden = count > 0;
	$('publish').textContent = count ? `Publish ${count} change${count === 1 ? '' : 's'}` : 'Publish';
	$('last-publish').hidden = !state.lastPublish;
	if (state.lastPublish) {
		$('last-publish').textContent = `Last ${state.lastPublish.title.startsWith('Undo') ? 'undo' : 'publish'}: ${new Date(state.lastPublish.date).toLocaleString()}`;
	}
	setSending(false);
}

function confirmDialog(title, bodyNodes, okLabel) {
	$('confirm-title').textContent = title;
	$('confirm-body').replaceChildren(...bodyNodes);
	$('confirm-ok').textContent = okLabel;
	const dialog = $('confirm');
	dialog.returnValue = '';
	dialog.showModal();
	return new Promise((resolve) => dialog.addEventListener('close', () => resolve(dialog.returnValue === 'ok'), { once: true }));
}

function para(text) {
	const p = document.createElement('p');
	p.textContent = text;
	return p;
}

function changeList() {
	const ul = document.createElement('ul');
	ul.append(...state.changes.map((c) => Object.assign(document.createElement('li'), { textContent: c.title })));
	return ul;
}

async function runAction(work) {
	closeMenu();
	state.busy = true;
	setSending(false);
	try {
		await work();
	} catch (err) {
		toast(err.message);
	} finally {
		state.busy = false;
		await refreshChanges();
	}
}

$('publish').addEventListener('click', async () => {
	if (!state.changes.length) return;
	const ok = await confirmDialog('Publish to your live website?', [para('These changes will go live for everyone:'), changeList()], 'Publish');
	if (!ok) return;
	await runAction(async () => {
		const { sha } = await api('publish', { body: {} });
		toast('Publishing… your live site updates in about a minute.', 0);
		await refreshChanges();
		const live = state.liveUrl ? await waitForDeploy(state.liveUrl, sha) : false;
		toast(live ? 'Your changes are live.' : 'Published. The live site may take another minute to update.');
	});
});

$('discard').addEventListener('click', async () => {
	if (!state.changes.length) {
		toast('There are no unpublished changes to discard.');
		closeMenu();
		return;
	}
	const ok = await confirmDialog('Discard unpublished changes?', [para('These changes will be removed from the preview. Your live site is not affected.'), changeList()], 'Discard');
	if (!ok) return;
	await runAction(async () => {
		const { sha } = await api('discard', { body: {} });
		toast('Discarding… the preview will refresh in about a minute.', 0);
		await waitForDeploy(location.origin, sha);
		reloadFrame();
		toast('Changes discarded.');
	});
});

$('undo').addEventListener('click', async () => {
	if (!state.lastPublish) {
		toast('There is no publish to undo.');
		closeMenu();
		return;
	}
	const ok = await confirmDialog(
		'Undo the last publish?',
		[para(`Your live site will go back to how it was before: “${state.lastPublish.title}”.`), para('You can undo this too, if you change your mind.')],
		'Undo publish',
	);
	if (!ok) return;
	await runAction(async () => {
		const { sha } = await api('undo', { body: {} });
		toast('Undoing… your live site updates in about a minute.', 0);
		await waitForDeploy(location.origin, sha);
		reloadFrame();
		const live = state.liveUrl ? await waitForDeploy(state.liveUrl, sha) : false;
		toast(live ? 'Done. Your live site is back to how it was.' : 'Undone. The live site may take another minute to update.');
	});
});

$('logout').addEventListener('click', async () => {
	closeMenu();
	try { await api('logout', { body: {} }); } catch {}
	showLogin();
});

// ---------------------------------------------------------------- menu & toast

$('menu-button').addEventListener('click', (event) => {
	event.stopPropagation();
	const open = $('menu').hidden;
	$('menu').hidden = !open;
	$('menu-button').setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', (event) => {
	if (!$('menu').contains(event.target)) closeMenu();
});

function closeMenu() {
	$('menu').hidden = true;
	$('menu-button').setAttribute('aria-expanded', 'false');
}

let toastTimer;
function toast(message, ms = 5000) {
	clearTimeout(toastTimer);
	$('toast').textContent = message;
	$('toast').hidden = false;
	if (ms) toastTimer = setTimeout(() => { $('toast').hidden = true; }, ms);
}

boot();
