const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const boardSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
});

const Board = mongoose.model('Board', boardSchema);

const validateJob = (job) => {
  const schema = Joi.object({
    action: Joi.string().label('Action').min(4).required(),
    task: Joi.string().label('Task').min(5).required(),
  });
  return schema.validate(job);
};

exports.Board = Board;
exports.validate = validateJob;
