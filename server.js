var express = require('express')
var app = express()

var allowCrossDomain = function (req,res,next){
	res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain)

app.get('/api/comments',function(req,res){

	var data = [
	{id:1,author:'Pete Hunt',text:'This is one comment'},
	{id:2,author:'Jordan Walke',text:'This is *another comment*'}
	]

	res.json(data)
})


app.listen(3000)