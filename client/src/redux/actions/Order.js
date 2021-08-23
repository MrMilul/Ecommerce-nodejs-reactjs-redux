import axios from "axios"
import {
    ORDER_CREATAE_REQUEST, ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL, CART_EMPTY
} from "../types/OrderTypes"



export const createOrder = (order) => async (dispatch, getState) => {
    
    dispatch({
        type: ORDER_CREATAE_REQUEST,
        payload: order
    })

    try {
        const { userSignIn: { userInfo } } = getState()
        const { data } = await axios.post("/api/order", order,
            {
                headers: {
                    authorization: `Bearer ${userInfo.token}`
                }
            }
        )
        
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data.order
        })

        dispatch({
            type: CART_EMPTY,
        })
        localStorage.removeItem("cartItems")

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}