const path = require('path');
module.exports = {
	stories: [
		'../docs/**/*.stories.mdx',
		// "../src/**/*.stories.mdx",
		'../docs/**/*.stories.@(js|jsx|ts|tsx)'
		// "../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react',
	webpackFinal: async (config, {}) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.less$/,
			exclude: /node_modules/,
			// loaders: ['style-loader', 'css-loader', 'less-loader'],
			use: [
				{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader',
					options: {
						modules: {
							localIdentName: '[local]_[hash:base64:5]'
						}
					}
				},
				{
					loader: 'less-loader'
				}
			],
			include: path.resolve(__dirname, '../package')
		});

		// Return the altered config
		return config;
	}
};
