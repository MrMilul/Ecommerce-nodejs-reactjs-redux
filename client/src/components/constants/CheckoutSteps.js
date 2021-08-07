import React from 'react'
import './checkoutSteps.css'


const CheckoutSteps = (props) => {
    console.log(props.steps)
    return (
        <div className="stepsContainer">

            <div className="stepConainer">
                <div className="stepName">Sing In</div>
                <div className= {props.step1  ? "steps stepActive" : "steps" }></div>
            </div>
            
            <div className="stepConainer">
                <div>Shiping</div>
                <div className= {props.step2 ? "steps stepActive" : "steps" }></div>
            </div>

            <div className="stepConainer">
                <div>payment</div>
                <div className= {props.step3 ? "steps stepActive" : "steps" }></div>
            </div>

            <div className="stepConainer">
                <div>place holder</div>
                <div className= {props.step4 ? "steps stepActive" : "steps" }></div>
            </div>
        </div>
    )
}

export default CheckoutSteps