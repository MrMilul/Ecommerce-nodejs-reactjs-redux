import React from 'react'

 const Cart = (props) => {

    return (
        <div>
            qty : {props.location.search.split("=")[1]} <br/>
            Product Id : {props.match.params.id}
        </div>
    )
}

export default Cart