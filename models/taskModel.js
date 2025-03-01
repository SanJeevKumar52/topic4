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

const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};


module.exports = { getAllTasks, addTask,deleteTask };


