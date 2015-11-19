var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var allowCrossDomain = function (req,res,next){
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var data = [
	{id:1,author:'Pete Hunt',text:'This is one comment'},
	{id:2,author:'Jordan Walke',text:'This is *another comment*'}
	]

app.get('/api/comments',function(req,res){

	

	res.json(data)
})


app.post('/api/comments',function(req,res){
	var _author = req.body.author
	var _text = req.body.text
	var _id = Date.now()
	var _comment = [{id:_id,'author':_author,'text':_text}]
	data = data.concat(_comment)
	res.json(data)
})


app.listen(3000)