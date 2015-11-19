var data = [{ id: 1, author: 'Pete Hunt', text: 'This is one comment' }, { id: 2, author: 'Jordan Walke', text: 'This is *another comment*' }];

var CommentBox = React.createClass({
	displayName: 'CommentBox',

	render: function () {
		return React.createElement(
			'div',
			{ className: 'commentBox' },
			React.createElement(
				'h1',
				null,
				'Hello,world! I am a CommentBox!'
			),
			React.createElement(CommentList, { data: this.props.data }),
			React.createElement(CommentForm, null)
		);
	}
});

ReactDOM.render(React.createElement(CommentBox, { data: data }), document.getElementById('example'));