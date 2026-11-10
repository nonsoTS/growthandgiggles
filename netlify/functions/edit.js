import { randomUUID } from 'node:crypto';
import { requireOwner } from '../lib/auth.js';
import { gh, PREVIEW, WORKFLOW } from '../lib/github.js';
import { error, handler, json, readJsonBody } from '../lib/http.js';

const LIMITS = { prompt: 4000, page: 200, element: 4000 };

export default handler(async (req) => {
	const unauthorized = requireOwner(req);
	if (unauthorized) return unauthorized;

	const { body, response } = await readJsonBody(req);
	if (response) return response;

	const prompt = typeof body.prompt === 'string' ? body.prompt.trim() : '';
	if (!prompt) return error('Describe the change you want', 400);

	const inputs = { prompt, page: body.page ?? '', element: body.element ?? '' };
	for (const [field, max] of Object.entries(LIMITS)) {
		if (typeof inputs[field] !== 'string' || inputs[field].length > max) {
			return error(`${field} must be text under ${max} characters`, 400);
		}
	}

	const requestId = randomUUID();
	await gh(`/actions/workflows/${WORKFLOW}/dispatches`, {
		method: 'POST',
		body: { ref: PREVIEW, inputs: { ...inputs, request_id: requestId } },
	});

	return json({ requestId }, 202);
});
