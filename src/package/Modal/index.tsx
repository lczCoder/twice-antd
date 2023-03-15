import React from 'react';
import { Modal } from 'antd';
import { ModalProps } from './type';
import s from './style.less';

const QModal: React.FC<ModalProps> = (props) => {
	const { visible, ...Props } = props;
	return (
		<Modal
			className={s['common-q-modal ']}
			cancelText="取消"
			okText="确定"
			centered={true}
			visible={visible}
			{...Props}
		>
			{props.children}
		</Modal>
	);
};

export default QModal;

// export default function QModal(props) {
// 	const { children } = props

// 	return (
// 		<>
// 			<Modal
// 				className='common-q-modal'
// 				closeIcon={<QIcon type='iconclose' color='#6b7287' fontSize='24px' />}
// 				cancelText='取消'
// 				okText='确定'
// 				centered={true}
// 				{...props}>
// 				{children}
// 			</Modal>
// 		</>
// 	)
// }
