import path from 'node:path';
import { parseSync } from 'vite';

// Support for the /admin editor:
// - Writes /version.json ({ commit }) on every build, so the editor knows when a deploy is live.
// - On preview builds only, tags every HTML element in src/ with data-src="file:line" so that
//   clicking an element in the editor tells Claude exactly where it is defined.

const isPreviewBuild = () => process.env.CONTEXT === 'branch-deploy' || process.env.CMS_SOURCE_TAGS === '1';

// DOM elements (<div>, <p>, ...) and framer-motion ones (<motion.div>); components may not
// forward unknown props, so they aren't tagged.
function isDomElement(name) {
	if (name.type === 'JSXIdentifier') return /^[a-z]/.test(name.name);
	return name.type === 'JSXMemberExpression' && name.object.type === 'JSXIdentifier' && name.object.name === 'motion';
}

function openingElements(node, out = []) {
	if (!node || typeof node !== 'object') return out;
	if (Array.isArray(node)) {
		for (const child of node) openingElements(child, out);
		return out;
	}
	if (node.type === 'JSXOpeningElement') out.push(node);
	for (const key in node) if (key !== 'parent') openingElements(node[key], out);
	return out;
}

export function tagSource(code, file) {
	const { program, errors } = parseSync(file, code, { lang: 'jsx' });
	if (errors.length) return null;

	const lineStarts = [0];
	for (let i = 0; i < code.length; i++) if (code[i] === '\n') lineStarts.push(i + 1);
	const lineOf = (offset) => {
		let lo = 0, hi = lineStarts.length - 1;
		while (lo < hi) {
			const mid = (lo + hi + 1) >> 1;
			if (lineStarts[mid] <= offset) lo = mid; else hi = mid - 1;
		}
		return lo + 1;
	};

	const inserts = openingElements(program)
		.filter((el) => isDomElement(el.name) && !el.attributes.some((a) => a.name?.name === 'data-src'))
		.map((el) => ({ at: el.name.end, text: ` data-src="${file}:${lineOf(el.start)}"` }))
		.sort((a, b) => b.at - a.at);

	let out = code;
	for (const { at, text } of inserts) out = out.slice(0, at) + text + out.slice(at);
	return out;
}

export default function cmsPlugin() {
	let root = process.cwd();
	return {
		name: 'cms',
		enforce: 'pre',
		configResolved(config) {
			root = config.root;
		},
		transform(code, id) {
			if (!isPreviewBuild() || !id.endsWith('.jsx') || id.includes('/node_modules/')) return null;
			const file = path.relative(root, id.split('?')[0]);
			if (!file.startsWith('src/')) return null;
			const tagged = tagSource(code, file);
			return tagged && { code: tagged, map: null };
		},
		generateBundle() {
			this.emitFile({
				type: 'asset',
				fileName: 'version.json',
				source: JSON.stringify({ commit: process.env.COMMIT_REF || 'local', builtAt: new Date().toISOString() }),
			});
		},
	};
}
