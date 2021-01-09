const express = require('express');
const bodyParser = require('body-parser');
var PORT = process.env.PORT || 5000;

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to BE application.' });
});
require('./app/router/customer.routes')(app);

// set port, listen for requests
app.listen(PORT, () => {
  console.log('Server is running on port 3000.');
});
