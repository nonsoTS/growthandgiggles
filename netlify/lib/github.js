import { env, fail } from './http.js';

const API = 'https://api.github.com';
export const WORKFLOW = 'site-edit.yml';
export const LIVE = 'main';
export const PREVIEW = 'preview';

function headers() {
	return {
		Authorization: `Bearer ${env('CMS_GITHUB_TOKEN')}`,
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
	};
}

export async function gh(path, { method = 'GET', body, allow = [] } = {}) {
	const res = await fetch(`${API}/repos/${env('GITHUB_REPO')}${path}`, {
		method,
		headers: { ...headers(), ...(body && { 'Content-Type': 'application/json' }) },
		body: body && JSON.stringify(body),
	});

	if (!res.ok && !allow.includes(res.status)) {
		const err = new Error(`GitHub ${method} ${path} failed: ${res.status} ${await res.text()}`);
		err.githubStatus = res.status;
		throw err;
	}
	if (res.status === 204 || !res.ok) return { status: res.status, data: null };
	return { status: res.status, data: await res.json() };
}

// Downloads a file endpoint (GitHub redirects to blob storage; fetch drops the
// Authorization header on that cross-origin hop) and returns its text.
export async function ghDownload(path) {
	const res = await fetch(`${API}/repos/${env('GITHUB_REPO')}${path}`, { headers: headers() });
	if (!res.ok) throw new Error(`GitHub download ${path} failed: ${res.status}`);
	return res.text();
}

export async function branchSha(branch) {
	const { data } = await gh(`/git/ref/heads/${branch}`);
	return data.object.sha;
}

export async function moveBranch(branch, sha, { force = false } = {}) {
	await gh(`/git/refs/heads/${branch}`, { method: 'PATCH', body: { sha, force } });
}

export async function getCommit(sha) {
	const { data } = await gh(`/git/commits/${sha}`);
	return data;
}

export async function createCommit({ message, tree, parents }) {
	const { data } = await gh('/git/commits', { method: 'POST', body: { message, tree, parents } });
	return data.sha;
}

// Commits on preview that aren't live yet, oldest first.
export async function pendingChanges() {
	const { data } = await gh(`/compare/${LIVE}...${PREVIEW}`);
	return data.commits
		.filter((c) => c.parents.length === 1)
		.map((c) => {
			const [title, ...rest] = c.commit.message.split('\n');
			const summary = rest.join('\n').replace(/^Request-Id:.*$/m, '').trim();
			return { sha: c.sha, title: title.replace(/^Site edit:\s*/, ''), summary, date: c.commit.author.date };
		});
}

export async function editRuns() {
	const { data } = await gh(`/actions/workflows/${WORKFLOW}/runs?event=workflow_dispatch&per_page=30`);
	return data.workflow_runs;
}

// Publishing or undoing while Claude is mid-edit would race with its push to preview.
export async function assertNoEditRunning() {
	const runs = await editRuns();
	if (runs.some((r) => r.status !== 'completed')) {
		fail('A change is still being made. Wait for it to finish, then try again.', 409);
	}
}
