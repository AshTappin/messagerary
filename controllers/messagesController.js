const loki	 = require('lokijs');
const idValidator	 = require('../validators/idValidator.js');

const db = new loki("Messagerary")
const messages = db.addCollection('messages');

module.exports = {

	createMessage : function(req, res) {
		console.log(`Recieved message: ${req.body}`)
		const messageInserted = messages.insert({id: 2344, message: `${req.body}`});
		res.send({ id: messageInserted.$loki});
	},

	getMessage : function (req, res) {
		const messageId = req.params.message_id;
		console.log(`Getting message with ID [${messageId}]...`)

		!idValidator.isANumber(messageId)
			? res.status(400).send(`Message ID needs to be a number`)
			: getMessageFromDb();

		function getMessageFromDb() {
			const messageRecord = messages.get(parseInt(messageId));
			messageRecord ? res.send(messageRecord.message) : res.status(404).send(`Message with ID [${messageId}] was not found`);	
		}
	}

}