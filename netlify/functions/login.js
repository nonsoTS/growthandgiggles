import { checkPassword, sessionCookie } from '../lib/auth.js';
import { error, handler, json, readJsonBody } from '../lib/http.js';

export default handler(async (req) => {
	const { body, response } = await readJsonBody(req);
	if (response) return response;

	if (!checkPassword(body.password)) {
		// Slow down password guessing.
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return error('Wrong password', 401);
	}

	return json({ ok: true }, 200, { 'Set-Cookie': sessionCookie() });
});
