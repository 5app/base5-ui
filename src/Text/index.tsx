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

interface ITextProps {
	bold: boolean | unknown[];
	caps: 'all' | 'first' | 'none' | unknown[];
	dimmed: boolean | unknown[];
	display: 'block' | 'inline' | 'inline-block' | unknown[];
	fontSize: string | unknown[];
	size: string | unknown[];
	lineHeight: number | string | unknown[];
	overflow: 'ellipsis' | 'wrap' | unknown[];
	textAlign: 'left' | 'center' | 'right' | unknown[];
	align: 'left' | 'center' | 'right' | unknown[];
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
