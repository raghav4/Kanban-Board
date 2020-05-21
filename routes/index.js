const express = require('express');
const boardController = require('../controllers/kanban.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

// using PUT because with the upsert condition if the task doesnt exist,
// create the task else update it

router.put('/', auth, boardController.updateStatus);

router.get('/:id', auth, boardController.getJob);

module.exports = router;
