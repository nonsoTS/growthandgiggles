import { requireOwner } from '../lib/auth.js';
import { assertNoEditRunning, branchSha, createCommit, getCommit, gh, LIVE, moveBranch, pendingChanges, PREVIEW } from '../lib/github.js';
import { fail, handler, json, readJsonBody } from '../lib/http.js';

// Makes the preview live. Always records a "Publish" commit on main whose first
// parent is the previous live version, so undo knows exactly what to go back to.
export default handler(async (req) => {
	const unauthorized = requireOwner(req);
	if (unauthorized) return unauthorized;

	const { response } = await readJsonBody(req);
	if (response) return response;

	await assertNoEditRunning();

	const [liveSha, previewSha, changes] = await Promise.all([branchSha(LIVE), branchSha(PREVIEW), pendingChanges()]);
	if (liveSha === previewSha || changes.length === 0) fail('There are no new changes to publish.', 409);

	// Someone pushed to main directly; publishing the preview would silently drop that work.
	const { data: compare } = await gh(`/compare/${LIVE}...${PREVIEW}`);
	if (compare.behind_by > 0) {
		fail('The live site has changes the preview doesn\'t include. Ask your developer to update the preview first.', 409);
	}

	const preview = await getCommit(previewSha);
	const message = [
		`Publish ${changes.length} change${changes.length === 1 ? '' : 's'}`,
		changes.map((c) => `- ${c.title}`).join('\n'),
	].join('\n\n');

	const publishSha = await createCommit({ message, tree: preview.tree.sha, parents: [liveSha, previewSha] });
	// Not forced: if main moved since we read it, this fails instead of overwriting.
	await moveBranch(LIVE, publishSha);
	await moveBranch(PREVIEW, publishSha);

	return json({ published: changes.length });
});
