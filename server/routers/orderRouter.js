const express = require("express")
const { isAuth } = require("../config/utils")
const orderRoute = express.Router()


const Order = require('../models/orderModel')



orderRoute.post('/',isAuth, async (req, res) => {
    if (req.body.orderItems.length === 0){
        res.status(400).json({ message: "The cart is Empty" })
    } else {
        const order = new Order({
            orderItems : req.body.orderItems,
            shippingAddress : req.body.shippingAddress,
            paymentMethod : req.body.paymentMethod,
            itemsPrice : req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice : req.body.taxPrice,
            totalPrice : req.body.totalPrice,
            user:req.user._id
        })

        const createOrder = await order.save()
        res.status(201).json({
            message: "New Order is created",
            order: createOrder
        })
    }
    
})

orderRoute.get("/:id", isAuth, async(req, res)=>{
    const order = await Order.findById(req.params.id)
    if(order){
        res.status(200).json(order)
    }else{
        res.status(400).json({message: "Order Not Found"})
    }

})
module.exports = orderRoute;