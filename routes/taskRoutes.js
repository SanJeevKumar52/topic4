const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

router.get('/tasks', taskController.getTasks);

module.exports = router;
