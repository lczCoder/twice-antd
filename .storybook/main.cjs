module.exports = {
	stories: [
		'../docs/**/*.stories.mdx',
		// "../src/**/*.stories.mdx",
		'../docs/**/*.stories.@(js|jsx|ts|tsx)'
		// "../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: '@storybook/react'
};
