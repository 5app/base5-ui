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
type OverflowValues = 'ellipsis' | 'wrap';
type TextAlignValues = 'left' | 'center' | 'right';
type AlignValues =  'left' | 'center' | 'right';

export interface ITextProps {
	bold: boolean | boolean[];
	caps: CapsValues | CapsValues[];
	dimmed: boolean | boolean[];
	display: DisplayValues | DisplayValues[];
	fontSize: string | string[];
	size: string | string[];
	lineHeight: number | string | unknown[];
	overflow: OverflowValues | string[];
	textAlign: TextAlignValues | TextAlignValues[];
	align: AlignValues | AlignValues[];
}

const Text = styled('span').withConfig({
	shouldForwardProp,
})`
	${styleProps}
	${(props: ITextProps) =>
		textProps({
			...props,
			textAlign: props.align || props.textAlign,
			fontSize: props.size || props.fontSize,
		})}
`;

export default Text;
