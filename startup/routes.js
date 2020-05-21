const bodyParser = require('body-parser');
const board = require('../routes');
const user = require('../routes/user');
const welcome = require('../routes/welcome');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/board', board);
  app.use('/user', user);
  app.use('/', welcome);
};
