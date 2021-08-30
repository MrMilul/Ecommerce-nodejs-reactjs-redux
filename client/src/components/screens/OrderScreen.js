import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { orderDetail } from '../../redux/actions/Order'


const OrderScreen = (props) => {
    const orderId = props.match.params.id

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(orderDetail(orderId))
    }, orderId, dispatch)

    const orderDetails = useSelector(state => state.orderDetail)
    const { loading, error, order } = orderDetails

    return (
        <div>
            {props.match.params.id}
        </div>
    )
}

export default OrderScreen
