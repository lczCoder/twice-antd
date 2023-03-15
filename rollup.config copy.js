import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser'; // 代码压缩
import liverload from 'rollup-plugin-livereload'; // 热更新
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import image from '@rollup/plugin-image';
import generatePackage from 'rollup-plugin-generate-package-json';

// 环境变量
// eslint-disable-next-line no-undef
const env = process.env.NODE_ENV;
// 入口文件
const entry = 'packages/index.ts';

// babel配置
const babelOptions = {
	presets: ['@babel/preset-env'],
	extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
	exclude: '**/node_modules/**'
};

export default {
	// 入口
	input: entry,
	// 打包信息
	output: [
		{
			file: `dist/wandu-umd.js`,
			format: 'umd',
			name: 'wandu',
			globals: {
				react: 'react',
				reactDom: 'ReactDOM',
				antd: 'antd'
			}
		},
		{
			file: `dist/wandu-es.js`,
			format: 'es'
		}
	],
	// 第三方模块不进行打包
	external: [
		'antd',
		'@ant-design/icons',
		'react',
		'prop-types',
		'react-dom',
		'storybook',
		'lodash'
	],
	// 插件配置
	plugins: [
		postcss({
			plugins: []
		}),
		resolve(),
		// 支持commonjs，包括第三方引入使用到commonjs语法
		commonjs(),
		// typescript支持
		typescript(),
		// 支持读取json文件
		json(),
		svg(),
		image(),
		// babel
		babel(babelOptions),
		generatePackage({
			inputFolder: './',
			outputFolder: './dist',
			baseContents: ({ name, description, version }) => ({
				name,
				description,
				version,
				main: 'wandu-es.js'
			})
		}),
		env === 'production' && terser(),
		env !== 'production' && liverload()
	]
};
