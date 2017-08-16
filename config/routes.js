const messagesController = require("../controllers/messagesController.js");

module.exports.setupRoutes = function(app) {

	const baseName = "/messagerary";
	
	app.post(`${baseName}/messages/`, messagesController.createMessage);
	app.get(`${baseName}/messages/:message_id`, messagesController.getMessage);

}