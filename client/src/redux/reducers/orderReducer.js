import {
    ORDER_CREATAE_REQUEST, ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL, ORDER_CREATE_RESETE
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