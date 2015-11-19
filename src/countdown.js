var CountDown = React.createClass({
	mixins:[SetIntervalMixin],
	getInitialState:function(){
		return {
			seconds:0
		}
	},
	componentDidMount:function(){
		this.setInterval(this.tick,1000)
	},
	tick:function(){
		this.setState({seconds:this.state.seconds+1})
	},
	render:function(){
		return (
			<p>That is my CountDown App {this.state.seconds}</p>
		)
	}
})