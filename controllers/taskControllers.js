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
  
  exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    if (TaskModel.deleteTask(taskId)) {
      return res.status(204).send();
    }
    res.status(404).json({ error: 'Task not found' });
  };



