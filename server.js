var express = require('express');
//var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var port = 3000;

app.use(express.static(__dirname + '/www'));

app.get('/', function (req, res) {
	res.send('Hello world !');
});

server.listen(port);

console.log("Le serveur a démarré sur localhost:"+port);
