const express = require('express');
const userController = require('../controllers/user.controller');
const validator = require('../middlewares/validator');
const { validate } = require('../models/user.model');

const router = express.Router();

// SignUp a user
router.post('/signup', validator(validate), userController.userSignUp);

// LogIn a user
router.post('/login', validator(validate), userController.logInUser);

module.exports = router;
