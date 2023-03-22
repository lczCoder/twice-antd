import { Optional } from '../types/base';

interface Props {
	title: string | React.ReactElement;
	extraContent: React.ReactNode[] | [];
	justify:
		| 'start'
		| 'end'
		| 'center'
		| 'space-around'
		| 'space-between'
		| 'space-evenly';
	children: React.ReactNode;
	className: string;
	style: {
		[styleName: string]: string;
	};
	[key: string]: any;
}

export type BoxProps = Optional<Props>;
