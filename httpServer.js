//call http module and save it to variable
var http = require('http');
//call fs module
var fs = require('fs');
//save server port to variable
var port = process.argv[2];
//save file path to variable
var file = process.argv[3];
//create variable in which data is going to be saved
var text = [];

//create server
var server = http.createServer(function(req,res){
	text = fs.createReadStream(file);

	text.pipe(res);

});

server.listen(port);

 //var http = require('http')
 //var fs = require('fs')
 //   
 //   var server = http.createServer(function (req, res) {
 //     res.writeHead(200, { 'content-type': 'text/plain' })
 //   
 //     fs.createReadStream(process.argv[3]).pipe(res)
 //   })
 //   
 //		   server.listen(Number(process.argv[2]))