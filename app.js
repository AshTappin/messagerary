const express = require('express');
const loki	 = require('lokijs');
const db = new loki("Messagerary")
const messages = db.addCollection('messages');

messages.insert({message: "HeyHey"});

var message = messages.find({message: "HeyHey"});

var app = express();

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	console.log(`Server up: http://localhost:${app.get('port')}`);
