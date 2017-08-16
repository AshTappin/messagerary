module.exports.setupRoutes = function(app) {

	const baseName = "/messagerary";

	app.post(`${baseName}/messages/`, function (req, res) {
  		res.send('POST needs implementing')
	});

	app.get(`${baseName}/messages/:messageId`, function (req, res) {
  		res.send('GET needs implementing')
	});

}