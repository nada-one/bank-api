'use strict'

// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");

// Import DB Connection
require("./config/db");

// create express app
const  app = express();

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Import API route
var routes = require('./routes/records');
routes(app);

// define port to run express app
const  port = process.env.PORT || 3000;

// Listen to server
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = server;
