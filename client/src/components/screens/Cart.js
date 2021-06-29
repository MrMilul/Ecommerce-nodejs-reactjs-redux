import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/Cart'
import {Link} from 'react-router-dom'

import MessageBox from '../constants/MessageBox'

const Cart = (props) => {
    const productId = props.match.params.id;
    const Qty = props.location.search ? props.location.search.split("=")[1] : 1
    const cartItems = useSelector((state)=> state.cart.cartItems)
    const dispatch = useDispatch()

    const checkOutHandler = ()=>{
        props.history.push("/signin?redirect=shipping")
    }
    const removeHandler = (id)=>{
        dispatch(removeFromCart(id))
    }
    useEffect(() => {
        dispatch(addToCart(productId, Qty))
    }, [dispatch, productId, Qty])
    return (
        <>
            {
                cartItems.length <= 0 
                ? (
                    <div className="container mt-5 ">
                        <MessageBox status="danger">{
                            <>
                            <div>Cart Is Empty</div>
                            <Link to="/">Go for Shopping</Link>
                            </>
                            } 
                        </MessageBox>
                    </div>) 
                : (
                    <div className="container mt-5 ">
                        <div className="row">

                        
                        <div className="col-lg-8">
                            {
                               cartItems.map((item, key)=>{
                                   return (
                                    <div key={key} className="jumbotron jumbotron-fluid bg-light">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col ">
                                                <img src={item.img} alt={item.img} 
                                                   style={{width:"5rem", height:"5rem"}} />
                                            </div>
                                            <div className="col ">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>
                                            <div className="col">
                                                <select 
                                                value={item.Qty}
                                                 onChange={ ((e)=> dispatch(addToCart((item.product), Number(e.target.value))))}
                                                >
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x)=> (
                                                            <option key={x+1}>{x+1}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="col">
                                                {item.Qty} * {item.price} = {item.Qty * item.price}$
                                            </div>
                                            <div className="col">
                                                <button onClick={()=>removeHandler(item.product)} className="btn btn-success">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                   )
                               })
                            }
                            
                        </div>



                            


                        <div className="col-lg-4  d-flex justify-content-center">
                            {/* Proceed to checout */}
                            <div className="card" style={{width: "20rem", height:"12rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">Subtotal(
                                    {cartItems.reduce((a, c)=> a + Number(c.Qty), 0)}
                                items): { cartItems.reduce((a, c)=> a + c.price* c.Qty, 0)}$    
                                </h5>
                                <button disabled ={ cartItems.length === 0 ? true : false}    
                                    className="btn btn-block btn-success mt-5"
                                    onClick={checkOutHandler}
                                >Proceed To Checkout</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }

        </>       
    )
}

export default Cart