let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

// Define routes and handlers here

module.exports = app;
