//call the http module
var http = require('http');
//save the url [first command-line argument] to variable
var url = process.argv[2];

http.get(url,function(res){

	res.setEncoding('utf8');

	res.on('data',function(chunk){
		console.log(chunk);
	})
});
