import express from "express";

const PORT = 4000;

const app = express();

//express middleware to parse data
app.use(express.json());

//express middleware for static files
app.use(express.static("./views"));

//url encoded middleware (parse form url encoded data)
app.use(express.urlencoded());

const user = { name: "Khush" };

app.post("/login", (req, res) => {
  console.log(req.body);
});

/* app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

app.get("/style.css", (req, res) => {
    res.sendFile("./style.css", { root: "." });
  }); */

app.get("/student", (req, res) => {
  res.send(user);
});

app.listen(PORT, () => console.log("server is running at ", PORT));
