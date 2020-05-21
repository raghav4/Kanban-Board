const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, validate, validateLogIn } = require('../models/user.model');

exports.userSignUp = async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username });
  if (user) return res.status(409).send('Username already in use');

  user = new User({
    username,
    password,
  });

  const salt = await bcrypt.genSalt(15);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  return res.status(200).send(_.pick(user, ['username']));
};

exports.logInUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(401).send('Invalid username or password');

  const validatePassword = await bcrypt.compare(password, user.password);
  if (!validatePassword) {
    return res.status(401).send('Invalid username or password');
  }

  const token = user.generateAuthToken();
  return res.header('x-auth-token', token).send('Login Successfull');
};
