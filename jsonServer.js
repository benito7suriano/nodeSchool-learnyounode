//call modules needed
var url = require('url');
var http = require('http');

//read and save port 
var port = process.argv[2];

var server = http.createServer(function(req,res){
	//parse the url object 
	var urlObj = url.parse(req.url, true);
	//get the pathname of url object
	var pathname = urlObj.pathname;
	//get query string with key iso
	var string = urlObj.query.iso;
	//change string format to ISO
	var result;
	
	if(pathname === '/api/parsetime'){
		
			result = parseTime(string);

	} else if(pathname === '/api/unixtime') {
			
			result = unixTime(string);

	}

	if(result) {
		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}

	
})

function parseTime(string){
	
	var time = new Date(Date.parse(string));

	return {
		hour : time.getHours(),
		minute : time.getMinutes(),
		second : time.getSeconds()
	}
}

function unixTime(string){
	
	var time = new Date(Date.parse(string));

	return {
		unixtime : time.getTime()
	}
}

server.listen(port);

//function parsetime (time) {
//      return {
//        hour: time.getHours(),
//       minute: time.getMinutes(),
//        second: time.getSeconds()
//      }
//    }
//    
//    function unixtime (time) {
//      return { unixtime : time.getTime() }
//    }
//    
//    var server = http.createServer(function (req, res) {
//      var parsedUrl = url.parse(req.url, true)
//      var time = new Date(parsedUrl.query.iso)
//      var result
//    
//      if (/^\/api\/parsetime/.test(req.url))
//        result = parsetime(time)
//      else if (/^\/api\/unixtime/.test(req.url))
//        result = unixtime(time)
//    
//      if (result) {
//        res.writeHead(200, { 'Content-Type': 'application/json' })
//        res.end(JSON.stringify(result))
//      } else {
//        res.writeHead(404)
//        res.end()
//      }
//    })
//    server.listen(Number(process.argv[2]))


