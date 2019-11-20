import {createStyleFunction} from '../utils/styleProps';
import {borderValue} from '../mixins';

const borderKeys = {
	top: 'borderTop',
	left: 'borderLeft',
	bottom: 'borderBottom',
	right: 'borderRight',
};

const borderProps = createStyleFunction([
	{
		styleProp: 'border',
		getRules: (border, theme) => {
			if (!borderKeys[border]) {
				return null;
			}
			return {
				border: 'none',
				[borderKeys[border]]: borderValue(theme),
			};
		},
	},
]);

export default borderProps;
