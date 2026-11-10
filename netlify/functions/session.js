import { isOwner } from '../lib/auth.js';
import { env, handler, json } from '../lib/http.js';

export default handler(async (req) => {
	const loggedIn = isOwner(req);
	return json({ loggedIn, ...(loggedIn && { previewUrl: env('PREVIEW_URL') }) });
});
