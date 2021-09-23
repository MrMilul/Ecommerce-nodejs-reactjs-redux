import {
    ORDER_CREATAE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESETE,
    ORDER_DETAIL_REQUEST,
    ORDER_DETAIL_SUCCESS,
    ORDER_DETAIL_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_RESET,
    ORDER_PAY_FAIL
} from "../types/OrderTypes"



export const OrderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATAE_REQUEST:
            return {
                loading: true
            }
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case ORDER_CREATE_RESETE:
            return {}
        default: return state
    }
}


export const orderDetailReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ORDER_DETAIL_REQUEST:
            return {
                loading: true
            }
        case ORDER_DETAIL_SUCCESS:
            return {
                loading: false.type,
                order: action.payload
            }
        case ORDER_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const payOrder = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return { loading: true }
        case ORDER_PAY_SUCCESS:
            return { loading: false, success: true }
        case ORDER_PAY_FAIL:
            return {loading:false, error:action.payload}
        case ORDER_PAY_RESET:
            return {}
        default: return state
    }

}