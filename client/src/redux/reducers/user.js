
import { USER_REGISTERATION_REQUEST, 
    USER_REGISTERATION_SUCCESS, 
    USER_REGISTERATION_FAIL} from '../types/RegisterationType'


export const userReducer = (state={loading:false, user:{}}, action)=>{
    switch(action.type){
        case USER_REGISTERATION_REQUEST:
            return{
                loading:true
            }
        case USER_REGISTERATION_SUCCESS:
            return{
                loading:false,
                user: action.payload
            }
        case USER_REGISTERATION_FAIL:
            return {
                loading:false,
                error: action.payload
            }
        default: return state
    }
}