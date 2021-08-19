const express = require("express")
const { isAuth } = require("../config/utils")
const orderRoute = express.Router()


const Order = require('../models/orderModel')



orderRoute.post('/', isAuth, async (req, res) => {
    if (req.body.orederItems.length === 0) {
        res.status(400).json({ message: "The cart is Empty" })
    } else {
        const order = new Order({
            orderItems : req.body.orderItems,
            shippingAddres : req.body.shippingAddres,
            paymentmethod : req.body.paymentmethod,
            itemsPrice : req.body.itemsPrice,
            taxPrice : req.body.taxPrice,
            totalPrice : req.body.totalPrice,
            user : req.user._id

        })

        const createOrder = await order.save()
        res.status(201).json({
            message: "New Order is created",
            order: createOrder
        })
    }
})


module.exports = orderRoute;