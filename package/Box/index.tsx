import React, { FC, ReactNode } from 'react';
import { BoxProps } from './type';
import { Row, Col } from 'antd';
import cs from 'classnames';
import './style.less';

const Box: FC<BoxProps> = (props) => {
	const {
		title,
		extraContent,
		justify = 'start',
		children,
		className,
		style = {},
		...opt
	} = props;

	const fn = (data: ReactNode[]) => {
		return (
			<Row
				justify={justify}
				className={cs('qfyw-qbox-row', {
					'qfyw-qbox-height': !title && !data.length,
					'qfyw-qbox-margin': title && data.length,
					['className']: className
				})}
				{...opt}
			>
				{data.map((extra, index) => (
					<Col key={index} className="box">
						{extra}
					</Col>
				))}
			</Row>
		);
	};
	const getNode = () =>
		!extraContent
			? fn([])
			: fn(Array.isArray(extraContent) ? extraContent : [extraContent]);

	return (
		<div className={cs('qfyw-qbox')} style={style}>
			{' '}
			<div className="qfyw-qbox-content">
				{' '}
				<span className="qfyw-qbox-title">
					{title ? <Col className="qfyw-qbox-col">{title}</Col> : <></>}{' '}
				</span>
				{getNode()}{' '}
			</div>
			{children}{' '}
		</div>
	);
};

export default Box;

// export default function Box(props) {
// 	// extraContent 可以是单个节点 或者 数组
// 	const {
// 		title,
// 		extraContent,
// 		justify = 'start',
// 		children,
// 		className,
// 		style = {},
// 		...item
// 	} = props;

// 	const fn = (data) => {
// 		return (
// 			<Row
// 				justify={justify}
// 				className={cs('qfyw-qbox-row', {
// 					'qfyw-qbox-height': !title && !data.length,
// 					'qfyw-qbox-margin': title && data.length,
// 					[className]: className
// 				})}
// 				{...item}
// 			>
// 				{data.map((extra, index) => (
// 					<Col key={index} className="box">
// 						{extra}
// 					</Col>
// 				))}
// 			</Row>
// 		);
// 	};

// 	const getNode = () =>
// 		!extraContent
// 			? fn([])
// 			: fn(Array.isArray(extraContent) ? extraContent : [extraContent]);

// 	return (
// 		<div className={cs('qfyw-qbox')} style={style}>
// 			<div className="qfyw-qbox-content">
// 				<span className="qfyw-qbox-title">
// 					{title ? <Col className="qfyw-qbox-col">{title}</Col> : <></>}
// 				</span>

// 				{getNode()}
// 			</div>

// 			{children}
// 		</div>
// 	);
// }
