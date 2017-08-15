const request = require("request");


describe("Messagerary Service", function() {
	const baseUrl = "http://localhost:3000/messagerary";

		it("allows a message to be stored and read back", function(done) {

			 request.post({
			 	url:     `${baseUrl}/messages/`,
  	 			form:    { mes: "T o p  S e c r e t  M e s s a g e" }
			 }, function(error, response, body) {
			 	expect(response.statusCode).toEqual(200);


			  	const messageId = body.id;

			  	request.get(`${baseUrl}/messages/${messageId}`, function(error, response, body) {
			  		expect(response.statusCode).toEqual(200);
				  	expect(body).toBe("T o p  S e c r e t  M e s s a g e")
			 		done();
				 });
			 	
			 	
			 });
		});
	

});