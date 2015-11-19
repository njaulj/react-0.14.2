var CountDown = React.createClass({
	displayName: "CountDown",

	mixins: [SetIntervalMixin],
	getInitialState: function () {
		return {
			seconds: 0
		};
	},
	componentDidMount: function () {
		this.setInterval(this.tick, 1000);
	},
	tick: function () {
		this.setState({ seconds: this.state.seconds + 1 });
	},
	render: function () {
		return React.createElement(
			"p",
			null,
			"That is my CountDown App ",
			this.state.seconds
		);
	}
});