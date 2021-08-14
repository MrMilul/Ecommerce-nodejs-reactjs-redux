import React, {useState}from 'react'
import { savePaymentMethod } from '../../redux/actions/Cart'
import { useDispatch, useSelector } from "react-redux"
import CheckoutSteps from '../constants/CheckoutSteps'

const Payment = (props) => {
    const [paymentMethod, setPaymentMethod] = useState('paypal')
    const cart = useSelector(state=>state.cart)
    const {shippingAddress} = cart
    if(!shippingAddress){
        props.history.push('/shipping')
    }

    const dispatch = useDispatch()
    const submitHandler = (e)=>{
            e.preventDefault();
            dispatch(savePaymentMethod(paymentMethod))
            props.history.push('/placeholder')
            
    }
   
    return (
        <div className="container">

            <CheckoutSteps step1 step2 step3 />

            <div className="row">
                <div className="col"></div>



                <div className="col mt-5">
                <div className="bg-success d-flex justify-content-center">
                Payment Method
            </div>
            <form onSubmit={submitHandler}>
                <div className="form-check">
                    <input className="form-check-input"
                        type="radio" name="paymentMethod" id="exampleRadios1"
                        value="paypal" checked 
                        onChange={(e)=>setPaymentMethod(e.target.value)} required/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Paypal
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio"
                     name="paymentMethod" id="exampleRadios2" 
                     value="stripe" onChange={(e)=>setPaymentMethod(e.target.value)} />
                    <label className="form-check-label" 
                    htmlFor="exampleRadios2">
                        Stripe
                    </label>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
                </div>



                <div className="col"></div>
            </div>
           
        </div>
    )
}

export default Payment;
