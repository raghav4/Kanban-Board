const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  action: {
    type: String,
    enum: {
      values: ['ToDo', 'Doing', 'Done'],
      message: "Action can only be in 'Todo', 'Doing' or in 'Done' state",
    },
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
});

const Board = mongoose.model('Board', boardSchema);

exports.Board = Board;
