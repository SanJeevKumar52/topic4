const TaskModel = require('../models/taskModel');

exports.getTasks = (req, res) => {
    res.json(TaskModel.getAllTasks());
  };

  exports.createTask = (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Task name is required' });
    }
    const task = TaskModel.addTask(name);
    res.status(201).json(task);
  };
  



