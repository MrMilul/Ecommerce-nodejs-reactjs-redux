import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD} from '../types/CartType'



export const addToCart = (productId, Qty)=> async(dispatch, getState)=>{

    const { data } = await axios.get(`/api/products/seed/${productId}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            price: data.price,
            img: data.img,
            countInStock: data.countInStock,
            product: data._id,
            Qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (productId)=> (dispatch, getState)=>{
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch)=>{

    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    })
    localStorage.setItem('shppingAddress', JSON.stringify(data))
}


export const savePaymentMethod = (data)=> (dispatch)=>{

    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}