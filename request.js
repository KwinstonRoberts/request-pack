var request = require('request');
var fs = require('fs');
request.get('https://sytantris.github.io/http-examples/future.jpg')
	.on('error',function(err){
		throw err;
	})
	.on('response',function(res){
		console.log("Response Status Code: ", res.statusCode, "Response Type",res.headers['content-type']);
	})
	.pipe(fs.createWriteStream('./future.jpg'));


