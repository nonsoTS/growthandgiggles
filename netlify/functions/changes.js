import { requireOwner } from '../lib/auth.js';
import { getCommit, branchSha, LIVE, pendingChanges } from '../lib/github.js';
import { handler, json } from '../lib/http.js';

// What's on the preview but not live yet, and whether the last publish can be undone.
export default handler(async (req) => {
	const unauthorized = requireOwner(req);
	if (unauthorized) return unauthorized;

	const [changes, live] = await Promise.all([pendingChanges(), branchSha(LIVE).then(getCommit)]);
	const lastPublish = /^(Publish|Undo)\b/.test(live.message)
		? { title: live.message.split('\n')[0], date: live.author.date }
		: null;

	return json({ changes, lastPublish });
});
