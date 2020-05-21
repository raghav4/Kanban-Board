const bodyParser = require('body-parser');
const board = require('../routes');
const welcome = require('../routes/welcome');
const error = require('../middlewares/error');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/board', board);
  app.use('/', welcome);
  app.use(error);
};
