var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	//read the file's wanted extension
	var ext1 = '.' + ext;
	//set variable to save filtered list and set
	//filteredList index to 0
	var filteredList = [];
	var j = 0;

	fs.readdir(dir,function(err,list){

		if(err){
			return callback(err);
		} else{
			
			for (var i = 0; i < list.length; i++){
				if(path.extname(list[i]) === ext1){
					filteredList[j] = list[i];
					j = j + 1;
				}
			}
			return callback(null,filteredList);
		}
	})

	
};

//var fs = require('fs')
//    var path = require('path')
//    
//    module.exports = function (dir, filterStr, callback) {
//    
//      fs.readdir(dir, function (err, list) {
//        if (err)
//          return callback(err)
//    
//        list = list.filter(function (file) {
//          return path.extname(file) === '.' + filterStr
//        })
//    
//        callback(null, list)
//      })
//    }

