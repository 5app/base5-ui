import maxSizeSource from 'popper-max-size-modifier';

export const matchWidth = {
	name: 'sameWidth',
	enabled: true,
	phase: 'beforeWrite',
	requires: ['computeStyles'],
	fn: ({state}) => {
		state.styles.popper.width = `${state.rects.reference.width}px`;
	},
	effect: ({state}) => {
		state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
	},
};

export const maxSize = {
	...maxSizeSource,
	options: {
		padding: 10,
	},
};

export const applyMaxHeight = {
	name: 'applyMaxSize',
	enabled: true,
	phase: 'beforeWrite',
	requires: ['maxSize'],
	fn: ({state}) => {
		const {height} = state.modifiersData.maxSize;
		state.styles.popper.maxHeight = `${height}px`;
	},
};
