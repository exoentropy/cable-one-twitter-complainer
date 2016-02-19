var express = require('express');
var speedTestService = require('./server/services/speedtest.js');
var port = process.env.PORT || 3030;
var environment = process.env.NODE_ENV || 'development';
var app = express();
//deliver static content from the public directory
app.use(express.static(__dirname + '/public/'));
app.set('port', port);
app.listen(port);
app.get('*', function (request, response) {
	speedTestService.run().done(function(data){
		response.send(data);
	});
});