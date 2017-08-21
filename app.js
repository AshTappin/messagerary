const express = require('express');
const routes = require('./config/routes.js');
const bodyParser = require('body-parser');
var server;

startUpServer();

function startUpServer() {

	var app = express();	
	app.set('port', process.env.PORT || 3000);
	app.use(bodyParser.text({type: "*/*"}));
	routes.setupRoutes(app);

	server = app.listen(app.get('port'), function() {
	console.log(`Server up  on http://localhost:${app.get('port')}`);
	});

} 


module.exports = {
	stopServer : function() {
		server.close();
	}
};