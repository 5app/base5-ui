import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	createStyleFunction,
	getPropFilter,
	getPropNamesFromPropDefinition,
} from '../utils/styleProps';

import {displayPropsDef} from '../styleProps/displayProps';
import {sizePropsDef} from '../styleProps/sizeProps';
import {marginPropsDef} from '../styleProps/marginProps';
import {paddingPropsDef} from '../styleProps/paddingProps';
import {themePropsDef} from '../styleProps/themeProps';
import textProps, {textPropsDef} from '../styleProps/textProps';

const propDefs = [
	...displayPropsDef,
	...sizePropsDef,
	...marginPropsDef,
	...paddingPropsDef,
	...themePropsDef,
];

const styleProps = createStyleFunction(propDefs);
const shouldForwardProp = getPropFilter(
	getPropNamesFromPropDefinition([...propDefs, ...textPropsDef])
);

const Text = styled('span').withConfig({
	shouldForwardProp,
})`
	${styleProps}
	${props =>
		textProps({
			...props,
			textAlign: props.align || props.textAlign,
			fontSize: props.size || props.fontSize,
		})}
`;

Text.propTypes = {
	bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
	caps: PropTypes.oneOfType([
		PropTypes.oneOf(['all', 'first', 'none']),
		PropTypes.array,
	]),
	dimmed: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
	display: PropTypes.oneOfType([
		PropTypes.oneOf(['block', 'inline', 'inline-block']),
		PropTypes.array,
	]),
	fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
	overflow: PropTypes.oneOfType([
		PropTypes.oneOf(['ellipsis', 'wrap']),
		PropTypes.array,
	]),
	textAlign: PropTypes.oneOfType([
		PropTypes.oneOf(['left', 'center', 'right']),
		PropTypes.array,
	]),
};

// @component
export default Text;
