/**
 * This map of keycodes is for compatibility with IE11,
 * which doesn't support the friendlier `event.key` property.
 * These ones have to be matched against `event.keyCode`.
 */
const KEY_CODES = {
	ESC: 27,
	ENTER: 13,
	SPACE: 32,
	ARROW_UP: 38,
	ARROW_DOWN: 40,
};

export {KEY_CODES};
