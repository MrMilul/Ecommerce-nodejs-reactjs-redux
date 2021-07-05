import axios from 'axios'

import { USER_REGISTERATION_REQUEST, 
    USER_REGISTERATION_SUCCESS, 
    USER_REGISTERATION_FAIL} from '../types/RegisterationType'

export const userRegisteration = (name, email, password)=> async(dispatch)=>{
    dispatch({
        type: USER_REGISTERATION_REQUEST
    })

    try{
        const {data} = await axios.post('api/user/register', {name, email, password}) 
        dispatch({
            type: USER_REGISTERATION_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: USER_REGISTERATION_FAIL, 
            payload: error.message
        })
    }
}