/*
 * Returns a queue function that executes all passed
 * functions with the queue function's arguments
 */

function mergeCallbacks(...passedFunctions) {
	return (...args) => {
		passedFunctions.forEach(func => {
			if (func) func(...args);
		});
	};
}

export default mergeCallbacks;
