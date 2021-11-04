import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDetail } from '../../../redux/actions/User'
import LoadingBox from '../../constants/LoadingBox'
import MessageBox from '../../constants/MessageBox'
const Profile = () => {
    const dispatch = useDispatch()

    const userSignIn = useSelector(state => state.userSignIn)
    const { userInfo } = userSignIn

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails;

    useEffect(() => {
        dispatch(userDetail(userInfo.id))
    }, [dispatch, userInfo.id])


   const submitHandler = (e)=>{
       e.preventDefault()
   }

    console.log(user)
    return (
        <div>
        <form onSubmit={submitHandler}>
            <div>
                <h1>User Profile</h1>
                {
                    loading ? (<LoadingBox/> ): error ?( <MessageBox>{error}</MessageBox> ):
                    (
                        <>
                        <div>
                            <lable htmlFor="name">Name</lable>
                            <input
                            id="name"
                            type="text"
                            placeholder="Enter Name"
                                value={user.name}
                            />
                        </div>
                        <div>
                            <lable htmlFor="name">Email</lable>
                            <input
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                                value={user.email}
                            />
                        </div>
                        <div>
                            <lable htmlFor="pasword">Password</lable>
                            <input
                            id="password"
                            type="password"
                            placeholder="Enter Pssword"
                            
                            />
                        </div>
                        <div>
                            <lable htmlFor="confPass">Confirm Password</lable>
                            <input
                            id="confPass"
                            type="password"
                            placeholder="Enter Confirm Password"
                           
                            />
                        </div>
                        <div>
                            <button type="submit">Update</button>
                        </div>
                        </>
                    )

                }
            </div>
        </form>
        </div>
    )
}

export default Profile
