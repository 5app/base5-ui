import {pxToRem} from '../utils/units';

export const alignMap = {
	top: 'flex-start',
	left: 'flex-start',
	center: 'center',
	bottom: 'flex-end',
	right: 'flex-end',
};

function flexProps(props) {
	const {
		flexAlign,
		basis,
		grow,
		shrink,
	} = props;

	return {
		/* Reset flex to */
		flex: 'none',
		/* Prevent overflowing content from expanding flex items */
		minWidth: 0,
		flexBasis: basis ? pxToRem(basis) : undefined,
		flexGrow: grow ? 1 : undefined,
		flexShrink: shrink ? 1 : undefined,
		alignSelf: alignMap[flexAlign] || flexAlign,
	};
}

export default flexProps;
