import axios from 'axios'
import {CART_ADD_ITEM} from '../types/CartType'



export const addToCart = (productId, Qty)=> async(dispatch, getState)=>{

    const { data } = await axios.get(`/api/products/${productId}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            price: data.peice,
            img: data.img,
            countInStack: data.countInStock,
            product: data._id,
            Qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}