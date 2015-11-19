
var CommentBox = React.createClass({
	getInitialState:function(){
		return {
			data:[]
		}
	},
	componentDidMount:function(){
		$.ajax({
			url:this.props.url,
			dataType:'json',
			cache:false,
			success:function(data){
				this.setState({data:data})
			}.bind(this),
			error:function(){
				console.log('服务器有错误')
			}.bind(this)
		})
	},
	render:function(){
		return (
			<div className="commentBox">
				<h1>Hello,world! I am a CommentBox!</h1>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
		)
	}
})


ReactDOM.render(
	<CommentBox url="http://localhost:3000/api/comments"/>,
	document.getElementById('example')
)