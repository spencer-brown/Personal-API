var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h2>A Personal API for Mehak Vohra</h2>');
});

var port = Number(process.env.PORT || 3000);


server.listen(port);
console.log('API server started on port ' + port);
