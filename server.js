var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('A Personal API for Mehak Vohra');
});

//API Setup
var port = Number(process.env.PORT || 3000);


//API Routes
require('./app/routes.js')(app);


//Starting a Server
app.listen(port);
console.log('API server started on port ' + port);
