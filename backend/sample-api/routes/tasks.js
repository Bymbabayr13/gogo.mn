const express = require("express");
const {
  readTask,
  deleteTask,
  updateTask,
  createTask,
} = require("../controller/taskController");
const taskRouter = express.Router();

taskRouter.get("/", readTask);
taskRouter.post("/create", createTask);
taskRouter.put("/update/:id", updateTask);
taskRouter.delete("/delete/:id", deleteTask);
module.exports = taskRouter;
