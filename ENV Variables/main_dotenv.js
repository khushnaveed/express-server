import express from "express";
import { config } from "dotenv";

config();

const PORT = 5000;

const app = express();

console.log(process.env);

app.get("/", (req, res) => {
  res.send(process.env.MONGO_URI);
});

app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});
