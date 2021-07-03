import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../types/CartType'



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