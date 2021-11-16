import React, {forwardRef} from 'react';

import Svg from './BaseSvg';

const TrashIcon = forwardRef((props, ref) => {
	const {size, color, ...otherProps} = props;

	// Unless the icon has an explicit ARIA label, we'll hide it visually
	const ariaHidden =
		!(otherProps['aria-label'] || otherProps['aria-labelledby']) ||
		undefined;

	return (
		<Svg
			{...otherProps}
			ref={ref}
			viewBox="0 0 18 18"
			width={size}
			height={size}
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
			focusable="false"
			aria-hidden={ariaHidden}
		>
			<path d="M4.5 7L5.37491 14.6147C5.41504 14.9374 6.87942 15.9986 8.99967 16C11.1212 15.9986 12.5856 14.9374 12.6251 14.6147L13.5 6.9791C12.3922 7.6385 10.5867 8 9 8C7.41458 8 5.60716 7.6594 4.5 7ZM11.0837 3.057L10.5187 2.3913C10.3002 2.0602 10.0634 2 9.60226 2H8.39774C7.93724 2 7.69976 2.0602 7.48201 2.3913L6.91691 3.057C6.02633 3.22256 4 3.73681 4 4.9393C4 6.0222 6.23867 6.9791 8.99967 6.9791C11.7613 6.9791 14 6.0222 14 4.9393C14 3.73682 11.9744 3.22257 11.0837 3.057ZM6.52089 5C6.52089 5 7.74581 3.4833 7.90961 3.2726C8.0346 3.1116 8.16223 3 8.328 3H9.672C9.83843 3 9.96606 3.1116 10.091 3.2726C10.2542 3.4833 11.4798 5 11.4798 5H6.52089Z" />
		</Svg>
	);
});

TrashIcon.displayName = 'TrashIcon';

TrashIcon.defaultProps = {
	size: 18,
	color: 'currentcolor',
};

export default TrashIcon;
