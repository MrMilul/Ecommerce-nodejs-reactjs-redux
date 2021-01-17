require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const connetDB = require('./config/db')

connetDB()
//const mongoose = require('mongoose')

//connecting server to the mogoDB Atlas
//mongoose.connect("mongodb+srv://mrmilul:mrmilul123@cluster0.fy4sm.mongodb.net/ecommerce?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
//mongoose.connection.once('open', ()=>{console.log("DB connected")})


 


app.listen(PORT, ()=>{
    console.log(`server is connected on the ${PORT} port `)
})
