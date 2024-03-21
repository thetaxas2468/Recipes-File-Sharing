const express = require("express");
var cors = require("cors");
const mongoose=require("mongoose")
require('dotenv').config();
const cookieParser = require("cookie-parser");
const accounts = require("./Routes/userRoute");
const { checkIfLoggedIn } = require("./Middlewares/Autherization");


const app=express();
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
  }));
app.use(express.json());
app.use(cookieParser());


app.use("/account",accounts)




app.use((req,res)=>{
    res.status(404)
    res.send("404 page not found")
})

mongoose
  .connect(process.env.MONGO_URL, {dbName:process.env.DB_NAME  })
  .then(() => {
      
    console.log("connected to mongoDB!")
    app.listen(process.env.SERVER_PORT,()=>{
      console.log("Server connected")
  })})
  .catch(() => console.log("failed to connect to mongoDB."));
