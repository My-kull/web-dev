/*
// Data model:
{
    "task": "Buy groceries",
    "completed": false,
    "dueDate": "2025-08-30"
}
 */

let taskArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
  if (!task || !completed || !dueDate) {
    return false;
  }

  const newTask = {
    id: nextId++, // Unique Id
    task,
    completed,
    dueDate,
  };

  taskArray.push(newTask); // Adds the new task to the taskArray
  return newTask; // Returns the new task object
}

function getAll() {
  return taskArray;
}

function findById(id) {
  const numericId = Number(id); // Converts the ID to a number
  const task = taskArray.find((item) => item.id === numericId); // Finds the task with the matching ID
  return task || false; // Returns the task or false if not found
}

function updateOneById(id, updatedData) {
  const task = findById(id);
  if (task) {
    // Update properties only if they are provided in updatedData
    if (updatedData.task) task.task = updatedData.task;
    if (updatedData.completed) task.completed = updatedData.completed;
    if (updatedData.dueDate) task.dueDate = updatedData.dueDate;
    return task; // Returns the updated task object
  }
  return false; // Returns false if the task with the provided ID isn't found
}

function deleteOneById(id) {
  const task = findById(id);
  if (task) {
    const initialLength = taskArray.length;
    taskArray = taskArray.filter((task) => task.id !== Number(id)); // Filters out the task with the matching ID
    return taskArray.length < initialLength; // Returns true if the array length decreased, indicating succesful deletion
  }
  return false; // Returns false if the task wasn't found
}

if (require.main === module) {
  // Add tasks
  let result = addOne("Eat", false, "2026-01-21");
  console.log(result);
  result = addOne("Drop by the store", false, "2026-01-21");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log(
    "updateOneById called:",
    updateOneById(1, { completed: false, dueDate: "2026-01-21" }),
  );
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const ToDos = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = ToDos;
