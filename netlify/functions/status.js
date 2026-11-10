import { requireOwner } from '../lib/auth.js';
import { editRuns, gh } from '../lib/github.js';
import { env, error, handler, json } from '../lib/http.js';

const FALLBACK_SUMMARY = {
	success: 'The change was made. Check the preview.',
	failure: 'Something went wrong while making that change, so nothing was changed. Try again, or rephrase the request.',
};

// The workflow posts {status, summary} as a "cms-result" annotation on its job.
async function readResult(run) {
	const { data } = await gh(`/actions/runs/${run.id}/jobs`);
	const job = data.jobs[0];
	if (job) {
		const { data: annotations } = await gh(`/check-runs/${job.id}/annotations`);
		const note = annotations.find((a) => a.title === 'cms-result');
		if (note) {
			try {
				return JSON.parse(note.message);
			} catch {}
		}
	}
	const ok = run.conclusion === 'success';
	return { status: ok ? 'changed' : 'failed', summary: FALLBACK_SUMMARY[ok ? 'success' : 'failure'] };
}

export default handler(async (req) => {
	const unauthorized = requireOwner(req);
	if (unauthorized) return unauthorized;

	const requestId = new URL(req.url).searchParams.get('requestId');
	if (!requestId || !/^[\w-]{1,64}$/.test(requestId)) return error('Missing requestId', 400);

	// GitHub takes a few seconds to create the run after dispatch, so "not found yet" means queued.
	const run = (await editRuns()).find((r) => r.name === `Site edit ${requestId}`);
	if (!run) return json({ state: 'queued' });
	if (run.status !== 'completed') {
		return json({ state: run.status === 'in_progress' ? 'running' : 'queued', startedAt: run.run_started_at });
	}

	const result = await readResult(run);
	return json({ state: 'done', ...result, previewUrl: env('PREVIEW_URL') });
});
