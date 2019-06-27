import React, {Component} from 'react';

// Keyboard accessibility: Handle button focus state in JS
// to normalise behaviour across browsers (Chrome issue)
// See http://marcysutton.com/button-focus-hell/

const focusController = PassedComponent => {
	class FocusController extends Component {
		constructor(props) {
			super(props);

			this.state = {
				mouseActive: false,
				isFocused: false,
			};

			this.handleMouseDown = this.handleMouseDown.bind(this);
			this.handleFocus = this.handleFocus.bind(this);
			this.handleBlur = this.handleBlur.bind(this);
		}

		handleMouseDown(e) {
			this.setState({mouseActive: true});

			setTimeout(() => {
				if (this.mounted) {
					this.setState({mouseActive: false});
				}
			}, 100);

			if (this.props.onMouseDown) {
				this.props.onMouseDown(e);
			}
		}

		handleFocus(e) {
			if (this.state.mouseActive === false) {
				this.setState({isFocused: true});
			}

			if (this.props.onFocus) {
				this.props.onFocus(e);
			}
		}

		handleBlur(e) {
			this.setState({isFocused: false});

			if (this.props.onBlur) {
				this.props.onBlur(e);
			}
		}

		render() {
			const {isFocused, innerRef, ...otherProps} = this.props;

			return (
				<PassedComponent
					{...otherProps}
					ref={innerRef}
					isFocused={
						isFocused ||
						(this.state.isFocused && !this.state.mouseActive)
					}
					onMouseDown={this.handleMouseDown}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
				/>
			);
		}

		UNSAFE_componentWillMount() {
			this.mounted = true;
		}

		componentWillUnmount() {
			this.mounted = false;
		}
	}

	function forwardRef(props, ref) {
		return <FocusController {...props} innerRef={ref} />;
	}

	// Give this component a more helpful display name in DevTools.
	// e.g. "ForwardRef(logProps(MyComponent))"
	forwardRef.displayName = `focusController(${Component.displayName ||
		Component.name})`;

	return React.forwardRef(forwardRef);
};

export default focusController;
