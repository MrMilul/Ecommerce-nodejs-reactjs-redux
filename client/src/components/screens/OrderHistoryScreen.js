import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { listOrderMine } from "../../redux/actions/Order"



const OrderHistoryScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listOrderMine())
    }, [dispatch])
    return (
        <div>
            Order Screen
        </div>
    )
}

export default OrderHistoryScreen
