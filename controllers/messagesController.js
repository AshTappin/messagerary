const loki	 = require('lokijs');
const db = new loki("Messagerary")
const messages = db.addCollection('messages');

module.exports = {

	createMessage : function(req, res) {
		console.log(`Recieved message: ${req.body}`)
		var messageInserted = messages.insert({id: 2344, message: `${req.body}`});
		console.dir(messageInserted);

		res.send({ id: messageInserted.$loki});
	},

	getMessage : function (req, res) {
		console.log(`Getting message with ID [${req.params.message_id}]`)
		const messageRecord = messages.get(parseInt(req.params.message_id));
		console.dir(messageRecord);		
		res.send(messageRecord.message);
	}

}