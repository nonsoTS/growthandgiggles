import { clearedCookie } from '../lib/auth.js';
import { handler, json, readJsonBody } from '../lib/http.js';

export default handler(async (req) => {
	const { response } = await readJsonBody(req);
	if (response) return response;

	return json({ ok: true }, 200, { 'Set-Cookie': clearedCookie() });
});
