import React from 'react';
import styled from 'styled-components';
import {getColorBlock} from '../utils/colors';

const Wrapper = styled.div`
	height: 0;
	color: ${p => getColorBlock(p.color, p.theme)};
`;

function StripesPattern({id, color}) {
	return (
		<Wrapper color={color}>
			<svg
				width="0"
				height="0"
				viewBox="0 0 20 20"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<defs>
					<pattern
						id={id}
						patternUnits="userSpaceOnUse"
						width="20"
						height="20"
					>
						<g
							stroke="none"
							strokeWidth="1"
							fill="none"
							fillRule="evenodd"
						>
							<g fill="currentColor">
								<polygon points="0 20 20 0 10 0 0 10" />
								<polygon points="20 20 20 10 10 20" />
							</g>
						</g>
					</pattern>
				</defs>
			</svg>
		</Wrapper>
	);
}

export default StripesPattern;
