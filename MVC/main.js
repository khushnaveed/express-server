import express from "express";
import usersRoutes from "./routes/usersRoutes.js";

//create port
const PORT = 5000;

//create server
const app = express();

app.use("/users", usersRoutes);

//Server listening port
app.listen(PORT, () => {
  console.log("Server is running at ", PORT);
});
