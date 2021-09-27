import axios from "axios"
import {
    ORDER_CREATAE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    CART_EMPTY,
    ORDER_DETAIL_REQUEST,
    ORDER_DETAIL_SUCCESS,
    ORDER_DETAIL_FAIL, 
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL, 
    ORDER_MINE_LIST_FAIL,
    ORDER_MINE_LIST_REQUEST,
    ORDER_MINE_LIST_SUCCESS
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

export const orderDetail = (orderId) => async (dispatch, getState) => {
    dispatch({
        type: ORDER_DETAIL_REQUEST,
        payload: orderId
    })

    try {
        const { userSignIn: { userInfo } } = getState()
        const { data } = await axios.get(`/api/order/${orderId}`,
            {
                headers: {
                    authorization: `Bearer ${userInfo.token}`
                }
            }
        )

        dispatch({
            type: ORDER_DETAIL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ORDER_DETAIL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const payOrder = (order, paymentResult)=> async(dispatch, getState)=>{
    dispatch({
        type: ORDER_PAY_REQUEST
    })
    const { userSignIn: { userInfo } } = getState()

    try{
        const { data } = await axios.put(`/api/order/${order._id}/pay`,paymentResult,
        {
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        }
        )

        dispatch({
            type:ORDER_PAY_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
} 


export const listOrderMine = ()=> async(dispatch,getState)=>{
    const { userSignIn: { userInfo } } = getState()

    dispatch({
        type: ORDER_MINE_LIST_REQUEST,
    })

    try{
        const { data } = await axios.get("/api/order/mine", {
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        })

        dispatch({
            type: ORDER_MINE_LIST_SUCCESS,
            payload: data
            
        })
    }catch(error){

        dispatch({
            type: ORDER_MINE_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}