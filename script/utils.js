/* eslint-disable no-undef */
import * as path from 'path';
import * as fs from 'fs';
// import alias from '@rollup/plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
// import less from 'rollup-plugin-less';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import generatePackage from 'rollup-plugin-generate-package-json';
const isProd = process.env.NODE_ENV === 'production';
// 入口
export const entry = path.resolve(__dirname, '../package/index.ts');
const componentsDir = path.resolve(__dirname, '../package');
const componentsName = fs
	.readdirSync(path.resolve(componentsDir))
	.filter(
		(item) => !['global.d.ts', 'index.ts', 'styles', 'types'].includes(item)
	);
export const componentsEntry = componentsName.map(
	(name) => `${componentsDir}/${name}/index.tsx`
);

// Babel配置
const babelOptions = {
	presets: ['@babel/preset-env'],
	extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
	exclude: '**/node_modules/**'
};
// 忽略文件
export const externalConfig = [
	(id) => /\/__expample__|main.tsx/.test(id),
	'react',
	'react-dom',
	'classname',
	'react-is',
	'**/node_modules/**',
	'lodash',
	'antd',
	'prop-types',
	'storybook'
];

// ES Module打包输出
export const esmOutput = {
	preserveModules: true,
	preserveModulesRoot: 'src',
	exports: 'named',
	assetFileNames: ({ name }) => {
		const { ext, dir, base } = path.parse(name);
		if (ext !== '.css') return '[name].[ext]';
		// 规范 style 的输出格式
		return path.join(dir, 'style', base);
	}
};

// 通用插件
export const commonPlugins = [
	// less(),
	// alias({
	// 	entries: [
	// 		{
	// 			find: '@type',
	// 			replacement: path.resolve(__dirname, '../package/types')
	// 		}
	// 	]
	// }),
	postcss({
		plugins: []
	}),
	peerDepsExternal(),
	resolve(),
	commonjs({ sourceMap: !isProd }),
	typescript(),
	babel({ ...babelOptions }),
	json(),
	generatePackage({
		inputFolder: path.resolve(__dirname, '../'),
		outputFolder: path.resolve(__dirname, '../dist'),
		baseContents: ({ name, description, version }) => ({
			name,
			description,
			version,
			main: 'package/index.js',
			typings: 'package/index.d.ts'
		})
	})
];

export const zz = [resolve(), commonjs({ sourceMap: !isProd }), typescript()];
