require("dotenv").config();

const express = require("express");
//create app with the help of express
const app = express();

const cors = require("cors");

require("./db/conn");
const router=require("./Routes/router");
//define the port number
const port = process.env.port|| 6002;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log("server starts");
})

