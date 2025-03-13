import express from "express";
import createHttpError from "http-errors";

const PORT = 5000;

const app = express();

const users = [];

//parse the data which is received thriugh request
app.use(express.json());

app.use((req, res, next) => {
  console.log("received req in app.use");
  console.log(
    "mehtod",
    req.method,
    "request url",
    req.url,
    "request ip",
    req.ip
  );
  next();
});

app.get("/users", (req, res) => {
  console.log("received req in get");
});

//error handling when reading/writing data from database
app.post("/users", (req, res) => {
  /*  try {
    console.log("received req in get");
  } catch (error) {
    next(error);
  } */
});

//error handling without middleware
app.get("/users/:id", (req, res) => {
  const user = users.find((item) => item.id === Number(req.params.id));
  if (user) {
    res.send("received request for user id");
  } else {
    //sending status and res to the server the error
    res.status(404).send({ success: false, message: "invalid user" });
  }
});

//Error handling with nect(error)
app.delete("/users/:id", (req, res, next) => {
  const user = users.find((item) => item.id === Number(req.params.id));
  if (user) {
    res.send("received request for user id");
  } else {
   /*  const error = new Error("Invalid user!");
    next(error); //forwarding request along with error */
    const error = new createHttpError.PaymentRequired("You must pay first");
    next(error);
  }
});


//middleware for error 404 page
app.use((req, res, next) => {
  res.sendFile("./error.html", { root: "." });
});

//universal error handling middleware
//Request along with the error
app.use((err, req, res, next) => {
  
  res.status(err.status || 500).send({ message: err.message });
});

app.listen(PORT, () => {
  console.log("server is running at:", PORT);
});
