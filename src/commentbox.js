
var CommentBox = React.createClass({
	loadCommentsFromServer:function(){
		$.ajax({
			url:this.props.url,
			dataType:'json',
			cache:false,
			success:function(data){
				this.setState({data:data})
			}.bind(this),
			error: function(xhr, status, err) {
	        	console.error(this.props.url, status, err.toString());
		    }.bind(this)
		})	
	},
	handleCommentSumbit:function(comment){
		var comments = this.state.data
		comment.id = Date.now()
		var newComment = comments.concat([comment])
		this.setState({data:comments})
		console.log(this.state.data)
		// TODO:submit to the server and refresh the list
		$.ajax({
			url:this.props.url,
			dataType:'json',
			type:'POST',
			data:comment,
			success:function(data){
				this.setState({data:data})
			}.bind(this),
			error: function(xhr, status, err) {
	        	console.error(this.props.url, status, err.toString());
		    }.bind(this)
		})

	},
	getInitialState:function(){
		return {
			data:[]
		}
	},
	componentDidMount:function(){
		this.loadCommentsFromServer()
		setInterval(this.loadCommentsFromServer(),this.props.pollInterval)
	},
	render:function(){
		return (
			<div className="commentBox">
				<h1>Hello,world! I am a CommentBox!</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSumbit}/>
			</div>
		)
	}
})


ReactDOM.render(
	<CommentBox url="http://localhost:3000/api/comments" pollInterval={2000}/>,
	document.getElementById('example')
)