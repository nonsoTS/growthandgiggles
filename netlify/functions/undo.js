import { requireOwner } from '../lib/auth.js';
import { assertNoEditRunning, branchSha, createCommit, getCommit, LIVE, moveBranch, pendingChanges, PREVIEW } from '../lib/github.js';
import { fail, handler, json, readJsonBody } from '../lib/http.js';

// Puts the live site back to how it was before the last publish, as a new commit
// (history is kept). Undoing an undo re-applies that publish.
export default handler(async (req) => {
	const unauthorized = requireOwner(req);
	if (unauthorized) return unauthorized;

	const { response } = await readJsonBody(req);
	if (response) return response;

	await assertNoEditRunning();

	if ((await pendingChanges()).length > 0) {
		fail('You have unpublished changes. Publish or discard them before undoing the last publish.', 409);
	}

	const liveSha = await branchSha(LIVE);
	const live = await getCommit(liveSha);
	const title = live.message.split('\n')[0];
	if (!/^(Publish|Undo)\b/.test(title)) fail('There is no publish to undo.', 409);

	const before = await getCommit(live.parents[0].sha);
	const undoSha = await createCommit({ message: `Undo: ${title}`, tree: before.tree.sha, parents: [liveSha] });
	await moveBranch(LIVE, undoSha);
	await moveBranch(PREVIEW, undoSha, { force: true });

	return json({ undone: title, sha: undoSha });
});
