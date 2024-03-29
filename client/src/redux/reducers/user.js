
import {
    USER_REGISTERATION_REQUEST,
    USER_REGISTERATION_SUCCESS,
    USER_REGISTERATION_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_RESET
} from '../types/RegisterationType'


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTERATION_REQUEST:
            return {
                loading: true
            }
        case USER_REGISTERATION_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case USER_REGISTERATION_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}


export const userSignInReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {
                loading: true
            }
        case USER_SIGNIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }
        case USER_SIGNIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case USER_SIGNOUT:
            return {}
        default: return state
    }
}

export const userDetailReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case USER_DETAIL_REQUEST:
            return {
                loading: true
            }
        case USER_DETAIL_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case USER_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {
                loading: true
            }
        case USER_UPDATE_PROFILE_SUCCESS:
            return{
                loading: false,
                success:true
            }
            case USER_UPDATE_PROFILE_FAIL:
                return{
                    loading:false,
                    success:false,
                    error:action.payload
                }
        default: return state
    }
}