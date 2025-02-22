import express from "express";

const app = express();

const PORT = 8000;

//path along with the method is called endpoint

//middleware - a function receives 3 parameters and it can send back response or forward your request to next handler
app.use((req, res, next)=>{
   //res.send("i accept all method requests")
   console.log("method", req.method, "path", req.url);
   if(req.method === "PUT"){
    res.send("not accceptable")
   }
   next();
})

//users endpoints
app.get("/users", (req, res) => {
  res.send("recieved your GET request on /users");
});

app.post("/users", (req, res) => {
  res.send("recieved your POST request on /users");
});

app.patch("/users", (req, res) => {
  res.send("recieved your PATCH request on /users");
});

app.delete("/users", (req, res) => {
  res.send("recieved your DELETE request on /users");
});



//products endpoints
app.get("/products", (req, res) => {
  res.send("recieved your GET request on /products");
});

app.post("/products", (req, res) => {
  res.send("recieved your POST request on /products");
});

app.patch("/products", (req, res) => {
  res.send("recieved your PATCH request on /products");
});

app.delete("/products", (req, res) => {
  res.send("recieved your DELETE request on /products");
});

//orders endpoints
app.get("/orders", (req, res) => {
  res.send("recieved your GET request on /orders");
}); 

app.post("/orders", (req, res) => {
  res.send("recieved your POST request on /orders");
});

app.patch("/orders", (req, res) => {
  res.send("recieved your PATCH request on /orders");
});

app.delete("/orders", (req, res) => {
  res.send("recieved your DELETE request on /orders");
});

//err handler middleware
app.use((req, res)=>{
  res.send("no such req")
})
//run server
app.listen(PORT, () => {
  console.log("server is running at PORT:", PORT);
});
