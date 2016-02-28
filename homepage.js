var express = require('express');
var app = express();

var lessMiddleware = require('less-middleware');

app.use(lessMiddleware(__dirname + '/static'));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

app.get('/', function(req, res){
	res.render('index', {
		projects: [
			['audioVis', 'a html5 audio-visualiser using the Web Audio API & the canvas', '/audioVis'],
			['button', 'a button in which anyone can click to increment it', '/button'],
			['robotics', 'tutorials on how to use the visual basic phidget api to make robots', '/robotics']
		]
	});
});

app.get('*', function(req, res){
	res.send('Error');
});

var server = app.listen(4000);
