import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import CheckoutSteps from '../constants/CheckoutSteps'



const PlaceHolder = () => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress, paymentMethod, cartItems } = cart

    return (
        <div className="m-5">
            <div>
                <CheckoutSteps step1 step2 step3 step4 />
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-7 col-sm-12 m-1">
                    {/* Address */}
                    <div className="card mt-2">
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
                    <div className="card mt-2">
                        <div className="card-header text-center">
                            PAYMENT
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Payment Method:</h5>
                            <p className="card-text">{paymentMethod.toUpperCase()}</p>

                        </div>
                    </div>


                    {/* cart Items */}
                    <div className="card mt-2">
                        <div className="card-header text-center">
                            ORDER ITEMS
                        </div>
                        <div className="card-body">
                            <ul>
                                {
                                    cartItems.map(item=>{
                                        return(
                                            <li key={item.product} className="m-1">
                                                <div className="row align-items-center justify-content-between">
                                                <img style={{width:"100px", height:"100px"}} src={item.img} className="img-thumbnail rounded-circle border border-dark" alt="product Image"/>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                <p className='mr-0'>{item.Qty} * {item.price} = 
                                                {item.Qty*item.price} $
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





                <div className="col-md-3 col-sm-12 m-1">
                <div className="card mt-2">
                        <div className="card-header text-center">
                        Order Summary
                        </div>
                        <div className="card-body">
                           
                            

                            <button className="btn btn-block btn-outline-success">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceHolder;
