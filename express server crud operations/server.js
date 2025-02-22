import express from "express";

const PORT = 4000;

const app = express();

const todoList = [
  { id: 1, text: "take class", status: false },
  { id: 2, text: "assignments", status: false },
  { id: 3, text: "learning", status: false },
];

//reading all tasks

//reading 1 task

//create task

//update task

//delete task

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
