import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QLink } from '../../dist/package';

export default {
	title: 'Example/Link',
	component: QLink,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// text: String
		// backgroundColor: { control: 'color' }
	}
} as ComponentMeta<typeof QLink>;

const Template: ComponentStory<typeof QLink> = (args) => <QLink {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
	text: 'hello'
};
