# messagerary
A little node.js web service which lets you store messages. Since it is a library for messages, it is called a message(lib)rary.

## Prerequisites

You must have node installed in order to run the service

## How to start service:

1. Type **npm install-test** to install dependencies and run tests
2. If above is successful then type **npm start** to start up service

## How to use service
1. To store a message, you can do a POST like "curl http://localhost:3000/messagerary/messages/ -d 'a message to store'. If successful, this will return back an ID.
2. To get a message that has been created, then you can do a GET like "curl http://localhost:3000/messagerary/messages/<message_id>" where the id is the number which was returned in the above step.  
