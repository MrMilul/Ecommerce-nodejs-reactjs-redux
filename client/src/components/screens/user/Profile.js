import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDetail } from '../../../redux/actions/User'

const Profile = () => {
    const dispatch = useDispatch()

    const userSignIn = useSelector(state => state.userSignIn)
    const { userInfo } = userSignIn


    useEffect(() => {
        dispatch(userDetail(userInfo.id))
    }, [dispatch, userInfo.id])


    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user} = userDetails;

    console.log(user)
    return (
        <div>
fgds
        </div>
    )
}

export default Profile
