import { createHmac, timingSafeEqual } from 'node:crypto';
import { env, error } from './http.js';

const COOKIE = 'cms_session';
const MAX_AGE_SECONDS = 30 * 24 * 60 * 60;

function sign(payload) {
	return createHmac('sha256', env('SESSION_SECRET')).update(payload).digest('base64url');
}

function safeEqual(a, b) {
	const bufA = Buffer.from(a);
	const bufB = Buffer.from(b);
	return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export function checkPassword(password) {
	return typeof password === 'string' && safeEqual(password, env('ADMIN_PASSWORD'));
}

export function sessionCookie() {
	const payload = Buffer.from(JSON.stringify({ exp: Date.now() + MAX_AGE_SECONDS * 1000 })).toString('base64url');
	const value = `${payload}.${sign(payload)}`;
	return `${COOKIE}=${value}; Path=/; Max-Age=${MAX_AGE_SECONDS}; HttpOnly; Secure; SameSite=Strict`;
}

export function clearedCookie() {
	return `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`;
}

export function isOwner(req) {
	const cookie = req.headers.get('cookie') || '';
	const value = cookie.split(/;\s*/).find((c) => c.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1);
	if (!value) return false;

	const [payload, signature] = value.split('.');
	if (!payload || !signature || !safeEqual(signature, sign(payload))) return false;

	try {
		return JSON.parse(Buffer.from(payload, 'base64url').toString()).exp > Date.now();
	} catch {
		return false;
	}
}

// Returns a 401 response if the request isn't from the logged-in owner, otherwise null.
export function requireOwner(req) {
	return isOwner(req) ? null : error('Please log in again', 401);
}
