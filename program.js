// call get directory and filter module
var myModule = require('./modules.js');

// take in directory parameter and extension parameter from
// terminal input

var dirInput = process.argv[2];
var extInput = process.argv[3];

//call myModule

myModule(dirInput,extInput,function(err,list){
	if(err){
		//throw err;
		return console.error('There was an error:', err);
	} else {
		list.forEach(function(data){
			console.log(data);
		})
		

	}

});

//var filterFn = require('./solution_filter.js')
//    var dir = process.argv[2]
//    var filterStr = process.argv[3]
//    
//    filterFn(dir, filterStr, function (err, list) {
//      if (err)
//        return console.error('There was an error:', err)
//    
//      list.forEach(function (file) {
//        console.log(file)
//      })
//    })

