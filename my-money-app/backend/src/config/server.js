const port = 3003;

const express = require('express');
const bodyParser = require('body-parser');
const server = express();

//middleware
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
