//call http module
var http = require('http');
//call bl module
var bl = require('bl');
//save url to variable
var url = process.argv[2];

http.get(url,function(res){
	res.pipe(bl(function(err,data){
		if (err) throw err;

		console.log(data.toString().length);
		console.log(data.toString());
		
	}))
})