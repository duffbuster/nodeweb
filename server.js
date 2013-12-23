var http = require('http');
// var fs = require('fs');
var port = process.env.PORT || 1337;
// var index = fs.readFileSync('index.html');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("what's UP, this is raw code bra");
});
server.listen(port);