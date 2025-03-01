const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
