const express = require("express")
const { isAuth } = require("../config/utils")
const orderRoute = express.Router()


const Order = require('../models/orderModel')
orderRoute.get(
    '/mine',
    isAuth,
   async (req, res) => {
      const orders = await Order.find({ user: req.user._id });
      res.send(orders);
    }
  );


orderRoute.post('/', isAuth, async (req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).json({ message: "The cart is Empty" })
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id
        })

        const createOrder = await order.save()
        res.status(201).json({
            message: "New Order is created",
            order: createOrder
        })
    }

})

orderRoute.get("/:id", isAuth, async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        res.status(200).json(order)
    } else {
        res.status(400).json({ message: "Order Not Found" })
    }

})

orderRoute.put("/:id/pay", isAuth, async (req, res) => {

    const order = await Order.findById(req.params.id)

    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.emailaddress
        }
        const updateOrder = await order.save()
        res.json({ "message": "Order Paid", order: updateOrder })

    } else {
        res.status(404).json({ "message": "Order Not Found" })
    }

})





module.exports = orderRoute;