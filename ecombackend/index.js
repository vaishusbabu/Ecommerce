const express=require('express')
const app=express()
app.use(express.static(`${__dirname}/upload`));

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors=require('cors')
app.use(cors())

const router=require("./routes")
app.use("/",router)


const db=require('./dbconnection')

app.listen(4002,()=>{
    console.log("server started")
})