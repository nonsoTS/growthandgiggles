export function json(data, status = 200, headers = {}) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers },
	});
}

export function error(message, status) {
	return json({ error: message }, status);
}

export function env(name) {
	const value = process.env[name];
	if (!value) throw new Error(`Missing environment variable ${name}`);
	return value;
}

// POSTs must be JSON. Browsers can't send a cross-site JSON POST without a CORS
// preflight (which we never allow), so together with the SameSite cookie this
// blocks CSRF.
export async function readJsonBody(req) {
	if (req.method !== 'POST') return { response: error('Method not allowed', 405) };
	if (!req.headers.get('content-type')?.includes('application/json')) {
		return { response: error('Expected application/json', 415) };
	}
	try {
		return { body: await req.json() };
	} catch {
		return { response: error('Invalid JSON', 400) };
	}
}

// Throws an error whose message is safe to show the owner.
export function fail(message, status) {
	const err = new Error(message);
	err.status = status;
	err.expose = true;
	throw err;
}

// Wraps a handler so unexpected errors become a JSON 500 instead of a stack trace.
export function handler(fn) {
	return async (req, context) => {
		try {
			return await fn(req, context);
		} catch (err) {
			if (!err.expose) console.error(err);
			return error(err.expose ? err.message : 'Something went wrong on the server', err.status || 500);
		}
	};
}
