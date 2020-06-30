import React from 'react';

import Box from '../Box';
import Button from '../Button';
import InlineList from '../InlineList';
import Stack from '../Stack';
import Text from '../Text';
import useFocusOnMount from './';

function Dialog({onClose}) {
	const buttonRef = useFocusOnMount();
	return (
		<Box role="dialog" aria-labelledby="heading" p="s" background="shaded">
			<Stack spacing="s">
				<Text as="h2" bold size="l" id="heading">
					Do you really want to hrmpf!?
				</Text>
				<InlineList spacing="s">
					<Button
						ref={buttonRef}
						icon="x"
						size="medium"
						onClick={onClose}
					>
						Nah
					</Button>
					<Button
						icon="ok"
						color="primary"
						size="medium"
						onClick={onClose}
					>
						Sure
					</Button>
				</InlineList>
			</Stack>
		</Box>
	);
}

export default Dialog;
