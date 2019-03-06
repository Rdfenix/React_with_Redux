const port = 3003;

const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

//middleware
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json())
server.use(allowCors);
server.use(queryParser());

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
