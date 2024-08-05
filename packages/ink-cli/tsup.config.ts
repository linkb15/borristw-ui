import path from 'node:path';
import {defineConfig} from 'tsup';

export default defineConfig({
	minify: true,
	clean: true,
	shims: true,
	target: 'esnext',
	inject: ['./source/cjs-shim.ts'],
	banner: {
		js: '/* cli */',
	},
	tsconfig: path.resolve(__dirname, './tsconfig.json'),

	// external: ['react'],
	// sourcemap: true,
	// dts: true,
	format: ['esm'],
	entry: ['source/cli.tsx'],
	// esbuildOptions(options) {
	// 	options.banner = {
	// 		js: '"use client"',
	// 	};
	// },
});
