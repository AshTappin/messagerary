const loki	 = require('lokijs');
const idValidator	 = require('../validators/idFormatValidator.js');

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

		if (!idValidator.isANumber(messageId)) {
			res.status(401).send(`ID needs to be a number`);
			return;
		} 

		const messageRecord = messages.get(parseInt(messageId));
		messageRecord ? res.send(messageRecord.message) : res.status(404).send("Message with ID [-1] was not found");	 
	}

}