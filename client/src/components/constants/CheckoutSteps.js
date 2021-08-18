import React from 'react'
import { Link } from "react-router-dom"

import './checkoutSteps.css'


const CheckoutSteps = (props) => {
    return (
        <div className="stepsContainer">

            <div className="stepConainer">
                <div className="stepName">Sing In</div>
                <div className= {props.step1  ? "steps stepActive" : "steps" }></div>
            </div>
            
            <div className="stepConainer">
                <div><Link to='/shipping'>Shiping</Link></div>
                <div className= {props.step2 ? "steps stepActive" : "steps" }></div>
            </div>

            <div className="stepConainer">
                <div><Link to='/payment'>Payment</Link></div>
                <div className= {props.step3 ? "steps stepActive" : "steps" }></div>
            </div>

            <div className="stepConainer">
                <div><Link to='/placeholder'>Place Holder</Link></div>
                <div className= {props.step4 ? "steps stepActive" : "steps" }></div>
            </div>
        </div>
    )
}

export default CheckoutSteps