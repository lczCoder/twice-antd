import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import QBox from '../../dist/package/Box';

export default {
	title: '组件/Box',
	component: QBox,
	argTypes: {
		title: {
			name: 'title',
			type: { name: 'string', required: false },
			description: '容器左上角标题',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			},
			control: {
				type: 'text'
			}
		},
		justify: {
			name: 'justify',
			type: { name: 'string', required: false },
			description: '容器头部样式布局方式',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'start' }
			},
			options: [
				'start',
				'end',
				'center',
				'space-around',
				'space-between',
				'space-evenly'
			],
			control: { type: 'select' }
		},
		extraContent: {
			// type: { name: 'string', required: false }
			description: '容器头部插槽内容',
			table: {
				type: { summary: 'ReactElement | []' }
			},
			control: { type: 'null' }
		}
	}
} as unknown as ComponentMeta<typeof QBox>;

const Template: ComponentStory<typeof QBox> = (args) => <QBox {...args} />;

export const ExtraContent = Template.bind({});
ExtraContent.args = {
	title: '人数评估：',
	extraContent: (
		<>
			<input placeholder="请输入查询条件" />
			<button>查询</button>
		</>
	)
};

export const Title = Template.bind({});
Title.args = {
	title: 'hello'
};

export const Children = Template.bind({});
Children.args = {
	title: <b>Hello</b>,
	children: <p>world</p>
};

export const Justify = Template.bind({});
Justify.args = {
	title: '人数评估：',
	extraContent: (
		<>
			<input placeholder="请输入查询条件" />
			<button>查询</button>
		</>
	),
	justify: 'end'
};
