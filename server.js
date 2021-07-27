const express = require ("express");
const router = require("./route/userRoute");
const dotenv =  require ( "dotenv"); 
dotenv.config();
const app = express()
const route=require("./route/userRoute")
const database = require("./database/db")
app.use(express.json())

//route
app.get('/', (req, res, )=>res.json({message: `welcome to my api`}))

//middleware
app.use("/api/user", router)

database();

//server
const port = 5050
app.listen(port,()=> console.log (`server is running on port ${port}`));


