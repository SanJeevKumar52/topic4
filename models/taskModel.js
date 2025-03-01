let tasks = [];
let taskId = 1;

class Task {
  constructor(name) {
    this.id = taskId++;
    this.name = name;
    this.completed = false;
  }
}

const getAllTasks = () => tasks;
const addTask = (name) => {
  const task = new Task(name);
  tasks.push(task);
  return task;
};


module.exports = { getAllTasks };


