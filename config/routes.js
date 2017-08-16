const messagesController = require("../controllers/messagesController.js");

module.exports.setupRoutes = function(app) {

	const baseName = "/messagerary";

	app.post(`${baseName}/messages/`, function (req, res) {
  		console.log(`Recieved message ${req.body}`)
  		res.send(`POST needs implementing. ${req.body}`)
	});

	app.get(`${baseName}/messages/:message_id`, function (req, res) {
  		res.send(`GET needs implementing. Response ${req.params.message_id}`)
	});

}