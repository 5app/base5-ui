import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	createStyleFunction,
	getPropNamesFromPropDefinition,
	getPropFilter,
} from '../utils/styleProps';

import {positionPropsDef} from '../styleProps/positionProps';
import {displayPropsDef} from '../styleProps/displayProps';
import {flexPropsDef, baseFlexRules} from '../styleProps/flexProps';
import {sizePropsDef} from '../styleProps/sizeProps';
import {marginPropsDef} from '../styleProps/marginProps';
import {paddingPropsDef} from '../styleProps/paddingProps';
import {themePropsDef} from '../styleProps/themeProps';
import {borderPropsDef} from '../styleProps/borderProps';
import {textPropsDef} from '../styleProps/textProps';

const propDefs = [
	...positionPropsDef,
	...displayPropsDef,
	...flexPropsDef,
	...sizePropsDef,
	...marginPropsDef,
	...paddingPropsDef,
	...themePropsDef,
	...borderPropsDef,
	...textPropsDef,
];

const styleProps = createStyleFunction(propDefs);
const shouldForwardProp = getPropFilter(
	getPropNamesFromPropDefinition(propDefs)
);

const Box = styled('div').withConfig({
	shouldForwardProp,
})`
	${baseFlexRules}
	${styleProps}
`;

Box.propTypes = {
	position: PropTypes.oneOfType([
		PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed']),
		PropTypes.array,
	]),
	display: PropTypes.oneOfType([
		PropTypes.oneOf([
			'block',
			'inline',
			'inline-block',
			'flex',
			'inline-flex',
		]),
		PropTypes.array,
	]),
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	maxWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	minWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	maxHeight: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	minHeight: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	flexAlign: PropTypes.oneOfType([
		PropTypes.oneOf([
			'top',
			'left',
			'center',
			'bottom',
			'right',
			'stretch',
		]),
		PropTypes.array,
	]),
	basis: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
	]),
	grow: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.array,
	]),
	shrink: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.array,
	]),
	bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
	caps: PropTypes.oneOfType([
		PropTypes.oneOf(['all', 'first']),
		PropTypes.array,
	]),
	dimmed: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.array,
		PropTypes.func,
	]),
	fontSize: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.func,
	]),
	lineHeight: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.array,
		PropTypes.func,
	]),
	overflow: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	textAlign: PropTypes.oneOfType([
		PropTypes.oneOf(['left', 'center', 'right']),
		PropTypes.array,
	]),
	border: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.func,
	]),
	boxShadow: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.func,
	]),
	background: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.func,
	]),
	color: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.func,
	]),
};

// @component
export default Box;
