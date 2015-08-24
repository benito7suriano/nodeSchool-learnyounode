//call fs module to be able to read directory's path
var fs = require('fs');

//call path module to be able to determine file's extension
var path = require('path');

//read the directory's path
var dir = process.argv[2];

//read the file's wanted extension
var ext = '.' + process.argv[3];

//set variable to save entire list contents
//var	entireList = [];

//use readdir method to return list of files and 
//save it to entireList variable
fs.readdir(dir,function(err,list){
	if (err) throw err;

	for (i = 0; i < list.length; i++) {
//		entireList[i] = list[i];

//filter out contents of entireList to print only 
//the ones with correct file extension

		if(path.extname(list[i]) === ext){
			console.log(list[i]);

		}
	}
});

// var fs = require('fs')
//    var path = require('path')
//    
//    fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })





