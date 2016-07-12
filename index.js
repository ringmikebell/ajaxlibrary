	//Hello World

// 	var app = require('express')();

// 	var httpListeningTool = require('http').Server(app);
// 	app.get('/', function(request, response){
// 		response.send('<h1>Hello World</h1>')
// 	});

// 	httpListeningTool.listen(3000, function(){
// 		console.log('listening on *:3000')
		
// });

// accessing express module
var app = require('express')();

// module that is innate to Node.JS
//('http') - built in node module - we're passing the app variable through the built in server function
var http = require('http').Server(app);

//app.get - first argument is path
//second argument is callback
// '/' root directory

app.get('/', function(req, res){
	res.sendFile(_dirname + 'index/html');
});

//
http.listen(3000, function(){
	console.log('listening on *:3000');
});

