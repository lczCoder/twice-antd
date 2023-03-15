import React from 'react';
import './style.less';
import { baseProps } from './type';

const Link: React.FC<baseProps> = (props) => {
	const { name } = props;
	return <div>{name}</div>;
};
export default Link;
