// Load Express (a node.js framework), socket.io (for a fast data stream), and osc (to send the message to MAX)
require('dotenv').config()
var express = require('express');
var app = express();
var server = require('http').Server(app);

const PORT = process.env.PORT;

// This is the port on which the website is available
server.listen(PORT);

// This is just to tell the server to use the folder app/ as the public web folder
// This way, if your index.html asks for the files scripts.js and style.js, this is where the server will search for them
app.use(express.static(__dirname + '/app'));

// If the web client asks for the root folder, deliver him index.html
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/app/index.html');
});