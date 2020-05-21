const board = require('../routes');
const welcome = require('../routes/welcome');
const error = require('../middlewares/error');

module.exports = (app) => {
  app.use('/board', board);
  app.use('/', welcome);
  app.use(error);
};
