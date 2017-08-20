const request = require("request");
const app = require("./app.js")
const requestPromise = require("request-promise")
const baseUrl = "http://localhost:3000/messagerary";

describe("Messagerary Service", function() {

		it("allows a message to be stored and read back", (done) => {

			var id = requestPromise({
				method: "POST",
			 	url:     `${baseUrl}/messages/`,
  	 			body:    "T o p  S e c r e t  M e s s a g e",
	 			headers: {'Content-Type': 'text/plain'},
	 			json: true})
			.then((response) => response.id)
			.then(getMessageFromWebServiceWithID())
			.then(checkMessageReturnedIs("T o p  S e c r e t  M e s s a g e"))
			.then(() => stopServer(done))
			.catch(error => {
				stopServer(done);
			});
		});

});

function getMessageFromWebServiceWithID() {
	return (id) => getMessage(id);
}

function getMessage(messageId) {

	return requestPromise(`${baseUrl}/messages/${messageId}`)
		.then((response) => response.replace (/(^")|("$)/g, ''))
		.catch((error)=> console.log(error));
}

function checkMessageReturnedIs(expectedMessage) {
	return message => expect(message).toBe(expectedMessage);
}

function stopServer(done) {
	app.stopServer();
	done();
}