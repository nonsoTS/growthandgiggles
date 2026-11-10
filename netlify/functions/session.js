import { isOwner } from '../lib/auth.js';
import { env, handler, json } from '../lib/http.js';

// The editor always runs on the preview site; liveUrl is the production site (Netlify's URL).
export default handler(async (req) => {
	return json({ loggedIn: isOwner(req), previewUrl: env('PREVIEW_URL'), liveUrl: process.env.URL || null });
});
