import React from 'react'

const OrderScreen = (props) => {
    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default OrderScreen
