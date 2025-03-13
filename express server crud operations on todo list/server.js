import express from "express";
import { v4 } from "uuid";

const PORT = 4000;

const app = express();

const todoList = [
  { id: v4(), text: "take class", status: false },
  { id: v4(), text: "assignments", status: false },
  { id: v4(), text: "learning", status: false },
];

//middleware - parsing incoming json data
app.use(express.json());

const todoMap = new Map(todoList.map((item) => [item.id, item])); //O(1)

//reading all tasks
app.get("/alltasks", (req, res) => {
  console.log(todoMap);
  console.log(todoList);
  res.send(todoList);
});

app.get("/alltasks/:id", (req, res) => {
  const task = todoMap.get(req.params.id);
  res.json(task || { message: "Task not found" });
});

app.post("/alltasks", (req, res) => {
  const task = { id: v4(), text: req.body.text };
  todoList.push(task);
  res.send(todoList);
});

//update task -- chnages in exsisiting resource
app.patch("/alltasks/:id", (req, res) => {
  const task = todoMap.get(req.params.id);
  const { text, status } = req.body;
  task.text = text;
  task.status = status;
  todoMap.set(task.id, task);
  res.json(task || { message: "Task not found" });
});

//put request - replace the whole item

//delete task
app.delete("/alltasks/:id", (req, res) => {
  const taskId = req.params.id;
  todoMap.delete(taskId);
  const index = todoList.findIndex((item) => item.id === req.params.id);
  todoList.splice(index, 1);
  console.log(todoMap);
  console.log(todoList);
  res.json({ message: "Task deleted successfully" });
});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
