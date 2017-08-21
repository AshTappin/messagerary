const request = require("request");
const app = require("./app.js")
const requestPromise = require("request-promise")
const baseUrl = "http://localhost:3000/messagerary";

describe("Messagerary Service", function() {

		it("allows a message to be stored and read back", (done) => {

			postMessage("T o p  S e c r e t  M e s s a g e")
			.then(getMessageFromWebServiceWithID())
			.then(checkMessageReturnedIs("T o p  S e c r e t  M e s s a g e"))
			.then(() => done())
			.catch(error => {
				stopServer(done);
			});
		});

		it("returns a not found error if message does not exist",(done) => {
			requestPromise({url: `${baseUrl}/messages/-1`, simple: false})
				.then((response) => {
					expect(response).toBe("Message with ID [-1] was not found");
				})
				.then(() => done());

		})

		it("does not find message with number in ID",(done) => {
			postMessage("Hello there!")
				.then((response) => getMessage(`${response.id}ERE`))
				.then((response) => {
					expect(response).toBe("ID needs to be a number");
				})
				.then(() => stopServer(done));

		})

});

function postMessage(message) {
	return requestPromise({
				method: "POST",
			 	url:     `${baseUrl}/messages/`,
  	 			body:    message,
	 			headers: {'Content-Type': 'text/plain'},
	 			json: true})
}

function getMessageFromWebServiceWithID() {
	return (response) => getMessage(response.id);
}

function getMessage(messageId) {

	return requestPromise({url: `${baseUrl}/messages/${messageId}`, simple: false})
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