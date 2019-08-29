import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TIME_MINUTE = 60 * 1000;
const TIME_HOUR = 60 * TIME_MINUTE;
const TIME_DAY = 24 * TIME_HOUR;
const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class Time extends Component {

	constructor(props) {
		super(props);
		this.state = {
			datestring: null
		};
		this.timer = undefined;
		this.clearTimer = this.clearTimer.bind(this);
		this.setDateString = this.setDateString.bind(this);
	}

	componentDidMount() {
		// Set up timer to periodically cause re-render
		this.setDateString(this.props);
	}

	componentWillUnmount() {
		this.clearTimer();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.clearTimer();
		this.setDateString(nextProps);
	}

	clearTimer() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	setDateString(props) {
		// Clear any existing timers...
		this.clearTimer();

		const {systemTime, dateTime} = this.props;

		// Define the offset, how old is this...
		const time = date(dateTime);
		const systemtime = systemTime ? date(systemTime) : new Date();
		const offset = time && systemtime && systemtime.getTime() - time.getTime();
		const ms_today = Date.now() % TIME_DAY;

		let datestring = null;
		let nextCheck = null;

		if (offset < TIME_MINUTE) {

			nextCheck = TIME_MINUTE - offset;

			datestring = 'seconds ago';
		}
		else if (offset < (TIME_MINUTE * 4)) {

			nextCheck = (TIME_MINUTE * 4) - offset;

			datestring = 'minutes ago';
		}
		// Occcured today...
		else if (offset < ms_today) {

			nextCheck = ms_today - offset;

			datestring = toTimeString(time);
		}
		// Occurred this week
		else if (offset < (TIME_DAY * 6)) {

			nextCheck = (TIME_DAY * 6) - offset;

			// Get day
			if (time.getDay() === (((systemtime.getDay() - 1) + 7) % 7)) {
				datestring = 'Yesterday';
			}
			else {
				datestring = DOW[time.getDay()];
			}
			datestring += ', ' + toTimeString(time);

		}
		else {
			datestring = toDateString(time);
		}

		if (nextCheck) {
			this.timer = setTimeout(() => this.setDateString(this.props, nextCheck), nextCheck);
		}

		this.setState({datestring});
	}

	render() {
		const {dateTime} = this.props;
		const title = date(dateTime);

		return (
			<time dateTime={dateTime} title={title && title.toLocaleString()}>
				{this.state.datestring || 'n/a'}
			</time>
		);
	}
}

Time.propTypes = {
	dateTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string
	]).isRequired,
	systemTime: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string
	])
};

function toTimeString(time) {
	if (time.toLocaleTimeString) {
		return time.toLocaleTimeString().replace(/:\d{2} /, ' ');
	}
	else {
		return time.toTimeString();
	}
}

function toDateString(time) {
	if (time.toLocaleDateString) {
		return time.toLocaleDateString();
	}
	else {
		return time.toDateString();
	}
}

function date(d) {
	if (!d) {
		return null;
	}
	try {
		return new Date(d);
	}
	catch (e) {
		return null;
	}
}

export default Time;
