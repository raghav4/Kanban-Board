const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.jwtPrivateKey);
  return token;
};

const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().label('Username').min(5).required(),
    password: Joi.string().label('Password').min(5).required(),
  });
  return schema.validate(user);
};

exports.User = User;
exports.validate = validateUser;
