const { Board } = require('../models/kanban.model');

exports.updateStatus = async (req, res) => {
  const { task, action } = req.body;
  const job = await Board.findOneAndUpdate(
    { task },
    { action },
    { new: true, upsert: true },
  );
  return res.status(200).send(job);
};

exports.getJob = async (req, res) => {
  const job = await Board.findById(req.params.id);
  if (!job) return res.status(404).send('No job with foudn with the given id');

  return res.status(200).send(job);
};
