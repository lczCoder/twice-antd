/* eslint-disable no-undef */
import dts from 'rollup-plugin-dts';
import {
	entry,
	componentsEntry,
	esmOutput,
	externalConfig,
	commonPlugins
} from './utils.js';

// 环境变量
const BABEL_ENV = process.env.BABEL_ENV;

export default () => {
	switch (BABEL_ENV) {
		case 'esm':
			return [
				{
					input: [entry, ...componentsEntry],
					output: { ...esmOutput, dir: 'dist/', format: 'es' },
					external: externalConfig,
					plugins: [...commonPlugins]
				},
				{
					input: [entry, ...componentsEntry],
					output: { ...esmOutput, dir: 'dist/type', format: 'es' },
					external: externalConfig,
					plugins: [...commonPlugins, dts.default()]
				}
			];
	}
};
