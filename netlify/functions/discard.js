import { requireOwner } from '../lib/auth.js';
import { assertNoEditRunning, branchSha, LIVE, moveBranch, pendingChanges, PREVIEW } from '../lib/github.js';
import { fail, handler, json, readJsonBody } from '../lib/http.js';

// Throws away unpublished changes: the preview goes back to matching the live site.
export default handler(async (req) => {
	const unauthorized = requireOwner(req);
	if (unauthorized) return unauthorized;

	const { response } = await readJsonBody(req);
	if (response) return response;

	await assertNoEditRunning();

	const changes = await pendingChanges();
	if (changes.length === 0) fail('There are no unpublished changes to discard.', 409);

	const liveSha = await branchSha(LIVE);
	await moveBranch(PREVIEW, liveSha, { force: true });

	return json({ discarded: changes.length, sha: liveSha });
});
