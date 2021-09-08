import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { orderDetail } from '../../redux/actions/Order'


import LoadingBox from "../constants/LoadingBox"
import MessageBox from "../constants/MessageBox"
const OrderScreen = (props) => {
    const orderId = props.match.params.id

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(orderDetail(orderId))
    }, [orderId, dispatch])

    const orderDetails = useSelector(state => state.orderDetail)
    const { loading, error, order } = orderDetails

    return (
        <div>
            {
                loading ? (<div className="container mt-5"><LoadingBox /></div>)
                    : error ? (<div className="container mt-5"><MessageBox status="success">{error}</MessageBox></div>)
                        : (

                            <div className="row m-4">
                                {


                                    <div className=" col-md-8 col-sm-12 ">
                                        <p>Order ID: {order._id}</p>
                                        <div className="card mt-4">
                                            <div className="card-header bg-success">
                                                Shippingg
                                            </div>
                                            <div className="card-body">
                                                <h4>Name:</h4> {order.shippingAddress.fullName}
                                                <h4>Address:</h4>{order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}

                                                <MessageBox status="danger">Not Delivered</MessageBox>

                                            </div>
                                        </div>



                                        <div className="card mt-4">
                                            <div className="card-header bg-success">
                                                Payment
                                            </div>
                                            <div className="card-body">
                                                <h4>Payment Method:</h4> {order.paymentMethod}

                                                {
                                                    order.isPaid
                                                        ? <MessageBox status="succuss">Paid</MessageBox>
                                                        : <MessageBox status="danger">Not Paid</MessageBox>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                }




                                <div className="col-md-4 col-sm-12 ">
                                    <div className="card mt-5">
                                        <div className="card-header">
                                            Quote
                                        </div>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div>Items:</div>
                                                <div>{order.itemsPrice}$</div>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div>Shipping:</div>
                                                <div>{order.shippingPrice}$</div>
                                            </div>

                                             <div className="d-flex justify-content-between">
                                                <div>Tax:</div>
                                                <div>{order.taxPrice}$</div>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div className="font-weight-bold">Order Total:</div>
                                                <div>{order.totalPrice}$</div>
                                            </div>

                                            <button className="btn btn-block btn-success mt-5">PayPal</button>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        )
            }
        </div>
    )
}

export default OrderScreen
