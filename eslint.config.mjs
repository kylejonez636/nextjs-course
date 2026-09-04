import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import ignores from './eslint-ignore.mjs';

export default defineConfig([
	...nextVitals,
	globalIgnores(ignores),
]);
