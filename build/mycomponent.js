var MyComponent = React.createClass({
	displayName: "MyComponent",

	handleClick: function () {
		this.myInput.focus();
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement("input", { type: "text", ref: ref => this.myInput = ref }),
			React.createElement("input", {
				type: "button",
				value: "focus the text input ",
				onClick: this.handleClick
			})
		);
	}
});