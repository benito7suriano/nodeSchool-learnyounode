//call http module
var http = require('http');
//call through2-map module
var map = require('through2-map');
//save port to variable
var port = process.argv[2];

var server = http.createServer(function(req,res){
	
	if(req.method === "POST"){

		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
});

server.listen(port);

