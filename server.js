var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.end('A Personal API for Mehak Vohra');
});

var port = Number(process.env.PORT || 3000);

//Starting a Server
app.listen(port);
console.log('API server started on port ' + port);
