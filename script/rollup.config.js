/* eslint-disable no-undef */
import dts from 'rollup-plugin-dts';
import {
	entry,
	componentsEntry,
	esmOutput,
	externalConfig,
	commonPlugins,
	zz
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
				// {
				// 	input: [entry, ...componentsEntry],
				// 	output: { ...esmOutput, dir: 'dist/type', format: 'es' },
				// 	external: externalConfig,
				// 	plugins: [...commonPlugins, dts.default()]
				// },
				// {
				// 	input: entry,
				// 	output: {
				// 		file: 'dist/lib/wandu-umd.js',
				// 		format: 'umd',
				// 		name: 'wandu',
				// 		globals: {
				// 			react: 'react',
				// 			reactDom: 'ReactDOM',
				// 			antd: 'antd'
				// 		}
				// 	},
				// 	external: externalConfig,
				// 	plugins: [...commonPlugins]
				// },
				{
					input: entry,
					output: {
						file: `dist/lib/wandu-es.js`,
						format: 'es'
					},
					external: externalConfig,
					plugins: [...zz]
				}
			];
	}
};
