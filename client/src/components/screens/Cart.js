import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/Cart'


 const Cart = (props) => {
    const productId = props.match.params.id;
    const Qty = props.location.search ? props.location.search.split("=")[1] : 1
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(addToCart(productId, Qty))
    }, [dispatch,productId, Qty])
    return (
        <div>
            qty : {props.location.search.split("=")[1]} <br/>
            Product Id : {props.match.params.id}
        </div>
    )
}

export default Cart