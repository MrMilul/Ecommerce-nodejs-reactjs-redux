
import { USER_REGISTERATION_REQUEST, 
    USER_REGISTERATION_SUCCESS, 
    USER_REGISTERATION_FAIL, 
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL, 
    USER_SIGNOUT} from '../types/RegisterationType'


export const userRegisterReducer = (state={}, action)=>{
    switch(action.type){
        case USER_REGISTERATION_REQUEST:
            return{
                loading:true
            }
        case USER_REGISTERATION_SUCCESS:
            return{
                loading:false,
                userInfo: action.payload
            }
        case USER_REGISTERATION_FAIL:
            return {
                loading:false,
                error: action.payload
            }
        default: return state
    }
}


export const userSignInReducer = (state={}, action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return{
                loading:true
            }
        case USER_SIGNIN_SUCCESS:
            return{
                loading:false,
                userInfo: action.payload
            }
        case USER_SIGNIN_FAIL:
            return {
                loading:false,
                error: action.payload
            }
        case USER_SIGNOUT: 
            return{}
        default: return state
    }
}