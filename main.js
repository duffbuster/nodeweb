var http = require('http');
var fs = require('fs');
// var index = fs.readFileSync('index.html');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("what's UP");
});
server.listen(8080);