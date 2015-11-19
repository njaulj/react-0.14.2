var MyComponent = React.createClass({
	handleClick:function(){
		this.myInput.focus()
	},
	render:function(){
		return (
			<div>
				<input type="text" ref={(ref)=>this.myInput=ref} />
				<input
				type="button"
				value="focus the text input "
				onClick={this.handleClick}
				/>
			</div>
		)
	}
})