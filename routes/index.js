const express = require('express');
const boardController = require('../controllers/kanban.controller');
const auth = require('../middlewares/auth');
const validateObjectId = require('../middlewares/validateObjectId');
const { validate } = require('../models/kanban.model');
const validator = require('../middlewares/validator');

const router = express.Router();

// using PUT because with the upsert condition if the task doesnt exist,
// create the task else update it

router.post('/', [auth, validator(validate)], boardController.addJob);

router.put(
  '/:id',
  [auth, validateObjectId, validator(validate)],
  boardController.updateStatus,
);

router.get('/:id', [auth, validateObjectId], boardController.getJob);

module.exports = router;
