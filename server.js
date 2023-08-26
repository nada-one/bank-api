'use strict'

// require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

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

// Add endpoint
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

// Listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});