const express = require("express");
const app = express();

const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("./todoHandlers"); // 'todoHandlers.js' contains the route handlers

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /todos
app.get("/todos", getAllTasks);

// POST /todos
app.post("/todos", createTask);

// GET /todos/:todoId
app.get("/todos/:todoId", getTaskById);

// PUT /todos/:todoId
app.put("/todos/:todoId", updateTask);

// DELETE /todos/:todoId
app.delete("/todos/:todoId", deleteTask);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
