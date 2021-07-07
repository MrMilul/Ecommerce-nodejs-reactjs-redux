import axios from 'axios'

import { USER_REGISTERATION_REQUEST, 
    USER_REGISTERATION_SUCCESS, 
    USER_REGISTERATION_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT} from '../types/RegisterationType'

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
        localStorage.setItem('userInfo', JSON.stringify(data) )
    }catch(error){
        dispatch({
            type: USER_REGISTERATION_FAIL, 
            payload: error.message
        })
    }
}


export const userSignIn = (email, password)=> async(dispatch)=>{
    dispatch({
        type:USER_SIGNIN_REQUEST,
        payload: {email, password}
    })

    try{
        const { data } = await axios.post('/api/user/signin', {email, password})
        dispatch({
            type:USER_SIGNIN_SUCCESS, 
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data) )
    }catch(error){
        dispatch({
            type: USER_SIGNIN_FAIL, 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message  
        })
    }
    
}

export const signOut = ()=> (dispatch)=>{
    dispatch({
        type:USER_SIGNOUT
    })
    localStorage.removeItem('userInfo')
}