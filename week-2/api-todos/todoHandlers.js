// Data model:
/*
{
  "task": "Buy groceries",
  "completed": false,
  "dueDate": "2025-08-30"
}
 */

const ToDo = require("./todoLib");

const getAllTasks = (req, res) => {
  const tasks = ToDo.getAll();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { task, completed, dueDate } = req.body;

  const newTask = ToDo.addOne(task, completed, dueDate);

  if (newTask) {
    res.json(newTask);
  } else {
    res.status(500).json({ message: "Failed to create task" });
  }
};

const getTaskById = (req, res) => {
  const todoId = req.params.todoId;
  const task = ToDo.findById(todoId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

const updateTask = (req, res) => {
  const todoId = req.params.todoId;

  const { task, completed, dueDate } = req.body;

  const updatedTask = ToDo.updateOneById(todoId, { task, completed, dueDate });

  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

const deleteTask = (req, res) => {
  const todoId = req.params.todoId;

  const isDeleted = ToDo.deleteOneById(todoId);

  if (isDeleted) {
    res.json({ message: "Task deleted successfully" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
