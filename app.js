const express = require('express');
const configure = require('./config/configure.js')
var server;

startUpServer();

function startUpServer() {

	var app = express();	
	configure(app);

	server = app.listen(app.get('port'), function() {
	console.log(`Server up on http://localhost:${app.get('port')}`);
	});
} 

module.exports = {
	stopServer : function() {
		server.close();
	}
};