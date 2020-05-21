require('dotenv').config();
require('express-async-errors');
const express = require('express');

const app = express();

require('./startup/logging')(app);
require('./startup/db')();
require('./startup/routes')(app);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});

module.exports = server;
