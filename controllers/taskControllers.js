const TaskModel = require('../models/taskModel');

exports.getTasks = (req, res) => {
    res.json(TaskModel.getAllTasks());
  };




