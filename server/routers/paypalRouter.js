const express = require("express")
const paypalRoute = express.Router()



paypalRoute.get("/", (req, res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || "something")
})


module.exports = paypalRoute