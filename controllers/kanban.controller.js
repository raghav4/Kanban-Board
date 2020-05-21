const { Board } = require('../models/kanban.model');

exports.addJob = async (req, res) => {
  const { task, action } = req.body;
  let newTask = await Board.findOne({ task });
  if (newTask) return res.status(400).send('Task already exists');

  newTask = new Board({ task, action });
  await newTask.save();
  return res.status(200).send(newTask);
};

exports.updateStatus = async (req, res) => {
  const { task, action } = req.body;
  const job = await Board.findOneAndUpdate(
    { _id: req.params.id },
    { task, action },
    { new: true },
  );
  if (!job) return res.status(404).send('Job with the given id does not exist');
  return res.status(200).send(job);
};

exports.getJob = async (req, res) => {
  const job = await Board.findById(req.params.id);
  if (!job) return res.status(404).send('No job with foudn with the given id');

  return res.status(200).send(job);
};
