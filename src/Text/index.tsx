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

type CapsValues = 'all' | 'first' | 'none';
type DisplayValues = 'block' | 'inline' | 'inline-block';
type FontSizeValue = string | number;
type LineHeightValue = string | number;
type OverflowValues = 'ellipsis' | 'wrap';
type TextAlignValues = 'left' | 'center' | 'right';

export interface TextProps {
	bold: boolean | boolean[];
	dimmed: boolean | boolean[];
	caps: CapsValues | CapsValues[];
	display: DisplayValues | DisplayValues[];
	fontSize: FontSizeValue | FontSizeValue[];
	size: FontSizeValue | FontSizeValue[];
	lineHeight: LineHeightValue | LineHeightValue[];
	overflow: OverflowValues | OverflowValues[];
	textAlign: TextAlignValues | TextAlignValues[];
	align: TextAlignValues | TextAlignValues[];
}

const Text = styled.span.withConfig({
	shouldForwardProp,
})<TextProps>`
	${styleProps}
	${props =>
		textProps({
			...props,
			textAlign: props.align || props.textAlign,
			fontSize: props.size || props.fontSize,
		})}
`;

export default Text;
