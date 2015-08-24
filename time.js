//call the net module
var net = require('net');
//use the port number supplied as the first
//command-line arg
var portNumber = process.argv[2];

//create a server connection
var server = net.createServer(function(socket){
	var date = new Date();

	var year = date.getFullYear();
	var month = ('0' + (date.getMonth()+1)).slice(-2);
	var day = ('0' + date.getDate()).slice(-2);
	var hours = ('0' + date.getHours()).slice(-2);
	var mins = ('0' + date.getMinutes()).slice(-2);

	socket.end(year + '-' + month + '-' + day + ' ' +  hours + ':' + mins);
})

//start listening
server.listen(portNumber);


// var net = require('net')
//    
//    function zeroFill(i) {
//      return (i < 10 ? '0' : '') + i
//    }
//    
//    function now () {
//      var d = new Date()
//      return d.getFullYear() + '-'
//        + zeroFill(d.getMonth() + 1) + '-'
//        + zeroFill(d.getDate()) + ' '
//        + zeroFill(d.getHours()) + ':'
//        + zeroFill(d.getMinutes())
//    }
//    
//    var server = net.createServer(function (socket) {
//      socket.end(now() + '\n')
//    })
    
//    server.listen(Number(process.argv[2]))



