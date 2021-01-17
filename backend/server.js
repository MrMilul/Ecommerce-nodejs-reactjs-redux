require("dotenv").config()
const express = require('express')
const morgan = require("morgan")
const bodyParser = require('body-parser')
const app = express()

//required the routers
const categoryRoutes = require('./route/category')

const PORT = process.env.PORT

//const mongoose = require('mongoose')
const connetDB = require('./config/db')
connetDB()



//this is a logger tool
app.use(morgan('dev'))

//parsing the body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())




//using routes
app.use('/category', categoryRoutes)

//cors setup
// app.use((req, res, next)=>{
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', '*')
//     if(req.method == "OPTIONS"){
//             res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PATCH', 'DELETE', 'PUT')
//             return res.status(200).json({})
//     }
//     next()
// })

//404 error handlenig
app.use((req, res, next)=>{
    const error = new Error("Not Found")
    error.status = 404
    next(error)
})
app.use((error, req, res, next)=>{
    res.status(error,status || 500)
    res.json({
        message: error.message
    })
})



app.listen(PORT, ()=>{
    console.log(`server is connected on the ${PORT} port `)
})
