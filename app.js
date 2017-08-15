const express = require('express');
const mongoose = require('mongoose');

var app = express();

app.set('port', process.env.PORT || 3000);

mongoose.connect('mongodb://localhost/messagery');
mongoose.connection.on('open', () => console.log('Mongoose connected.'));

var server = app.listen(app.get('port'), function() {
	console.log(`Server up: http://localhost:${app.get('port')}`);
});