const loki	 = require('lokijs');
const db = new loki("Messagerary")

const messages = db.addCollection('messages');

module.exports = {

	createMessage : function(message) {
		messages.insert({message: "${message}"});
	}

}