const bodyParser = require('body-parser');
const routes = require('./routes.js');

module.exports = function(app) {
	app.set('port', process.env.PORT || 3000);
	app.use(bodyParser.text({type: "*/*"}));
	routes.setupRoutes(app);
}