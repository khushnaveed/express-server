import express from "express"

const PORT = 4000;

const app = express();
console.log(process.env);
app.get("/", (req,res)=>{
    res.send(process.env.MONGO_URI)
})

app.listen(PORT, ()=>{
    console.log("Server is running at ", PORT);
})

/* 
load env variables in process.env object
  "scripts": {
    "start": "node --env-file .env --watch main.js"
  }, */