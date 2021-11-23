import axios from 'axios'

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
}
    from '../types/RegisterationType'

export const userRegisteration = (name, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTERATION_REQUEST
    })

    try {
        const { data } = await axios.post('api/user/register', { name, email, password })
        dispatch({
            type: USER_REGISTERATION_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTERATION_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const userSignIn = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: { email, password }
    })

    try {
        const { data } = await axios.post('/api/user/signin', { email, password })
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

export const signOut = () => (dispatch) => {
    window.localStorage.clear()
    dispatch({
        type: USER_SIGNOUT
    })

}

export const userDetail = (id) => async(dispatch, getState) => {

    dispatch({
        type: USER_DETAIL_REQUEST
    })
    const { userSignIn: { userInfo } } = getState()

    try {

        const { data } = await axios.get(`api/user/${id}`, {
            headers: {
                authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({
            type: USER_DETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAIL_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}


export const updateUserProfile = (user)=> async (dispatch, getState)=>{
    dispatch({
        type: USER_UPDATE_PROFILE_REQUEST,
        payload: user
    })

    const {userSignIn:{userInfo}} = getState();

    try{
        const {data} = await axios.put("api/users/profile", user,{
            headers:{
                authorization:`Bearer ${userInfo.token}`
            }
        })
        dispatch({
            type:USER_UPDATE_PROFILE_SUCCESS,
            payload:data
        })

        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}