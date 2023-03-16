import React from 'react';
import './style.less';
import { baseProps } from './type';

const Link: React.FC<baseProps> = (props) => {
	const { text } = props;
	return <a>{text}</a>;
};
export default Link;
