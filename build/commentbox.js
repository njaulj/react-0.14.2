
var CommentBox = React.createClass({
	displayName: 'CommentBox',

	getInitialState: function () {
		return {
			data: []
		};
	},
	componentDidMount: function () {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ data: data });
			}).bind(this),
			error: (function () {
				console.log('服务器有错误');
			}).bind(this)
		});
	},
	render: function () {
		return React.createElement(
			'div',
			{ className: 'commentBox' },
			React.createElement(
				'h1',
				null,
				'Hello,world! I am a CommentBox!'
			),
			React.createElement(CommentList, { data: this.state.data }),
			React.createElement(CommentForm, null)
		);
	}
});

ReactDOM.render(React.createElement(CommentBox, { url: 'http://localhost:3000/api/comments' }), document.getElementById('example'));