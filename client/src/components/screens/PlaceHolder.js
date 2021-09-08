import React, {useEffect} from 'react'
import { Link } from "react-router-dom"
import LoadingBox from '../constants/LoadingBox'
import MessageBox from '../constants/MessageBox'

import { useSelector, useDispatch } from "react-redux"

import { createOrder } from '../../redux/actions/Order'
import CheckoutSteps from '../constants/CheckoutSteps'

import {ORDER_CREATE_RESETE} from '../../redux/types/OrderTypes'

const PlaceHolder = (props) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress, paymentMethod, cartItems } = cart


    if (!paymentMethod) {
        props.history.push('/payment')
    }

    const toPrice = ((num) => Number(num.toFixed(2)))

    cart.itemsPrice = cartItems.length > 0
        ? toPrice(cartItems.reduce((a, c) => (c.price * c.Qty + a), 0))
        : 0
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0)
        : cartItems.length == 0 ? toPrice(0)
            : toPrice(10)
    cart.taxPrice = toPrice(cart.itemsPrice * 0.15)
    cart.totalPrice = toPrice(cart.itemsPrice + cart.shippingPrice + cart.taxPrice)

    const dispatch = useDispatch()

    const placeHolderHandler = () => {
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }))
    }

    const { error, loading, success, order } = useSelector(state => state.orderCreate)
    useEffect(()=>{
        if(success){
            props.history.push(`/order/${order._id}`)
            dispatch({
                type: ORDER_CREATE_RESETE
            })
        }
    }, [dispatch, order, props.history, success])

    
    return (
        <div className="m-5">

            <div className="row justify-content-md-center">
                <div>

                    <CheckoutSteps step1 step2 step3 step4 />
                    <div className="m-3">
                    {loading && (<LoadingBox/>)}
                    {error && (<MessageBox status={"danger"} message={error}/>)}
                </div>
                </div>
               
                <div className="col-md-7 col-sm-12 m-1">
                    {/* Address */}
                    <div className="card mt-2 border border-dark">
                        <div className="card-header text-center">
                            SHIPPING
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Address:</h5>
                            <p className="card-text">{shippingAddress.address}, {shippingAddress.city},
                                {shippingAddress.country}, {shippingAddress.postalCode}
                            </p>

                        </div>
                    </div>

                    {/* payment method */}
                    <div className="card mt-2 border border-dark">
                        <div className="card-header text-center">
                            PAYMENT
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Payment Method:</h5>
                            <p className="card-text">{paymentMethod ? paymentMethod.toUpperCase() : ''}</p>

                        </div>
                    </div>


                    {/* cart Items */}
                    <div className="card mt-2 border border-dark">
                        <div className="card-header text-center">
                            ORDER ITEMS
                        </div>
                        <div className="card-body">
                            <ul>
                                {
                                    cartItems.map(item => {
                                        return (
                                            <li key={item.product} className="m-1">
                                                <div className="row align-items-center justify-content-between">
                                                    <img style={{ width: "100px", height: "100px" }} src={item.img} className="img-thumbnail rounded-circle border border-dark" alt="product Image" />
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    <p className='mr-0'>{item.Qty} * {item.price} =
                                                        {item.Qty * item.price} $
                                                    </p>
                                                </div>

                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                    </div>
                </div>




                {/* Order summary   */}
                <div className="col-md-3 col-sm-12 m-1">
                    <div className="card mt-2 border border-dark">
                        <div className="card-header text-center">
                            <h4 className="font-weight-bold">Order Summary</h4>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5>Items</h5>
                                {cart.itemsPrice} $
                            </div>

                            <div className="d-flex justify-content-between">
                                <h5>Shipping</h5>
                                {cart.shippingPrice} $
                            </div>

                            <div className="d-flex justify-content-between">
                                <h5>Tax</h5>
                                {cart.taxPrice} $
                            </div>

                            <div className="d-flex justify-content-between">
                                <h5>Order Total</h5>
                                {cart.totalPrice} $
                            </div>


                            <button className=" mt-3 btn btn-block btn-outline-success"
                                disabled={cartItems.length === 0}
                                onClick={placeHolderHandler}
                            >Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceHolder;
