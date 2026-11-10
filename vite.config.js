import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cmsPlugin from './tools/vite-plugin-cms.js';

export default defineConfig({
	plugins: [cmsPlugin(), react()],
	server: {
		port: 3000,
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
		},
	},
	build: {
		outDir: 'dist',
	},
});
