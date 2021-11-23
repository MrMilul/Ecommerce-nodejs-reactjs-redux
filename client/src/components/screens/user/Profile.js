import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDetail } from '../../../redux/actions/User'
import LoadingBox from '../../constants/LoadingBox'
import MessageBox from '../../constants/MessageBox'



const Profile = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confPass, setConfPass] = useState();

    const dispatch = useDispatch()

    const userSignIn = useSelector(state => state.userSignIn)
    const { userInfo } = userSignIn

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails;

    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
        } else {
            dispatch(userDetail(userInfo.id))
        }

    }, [dispatch, userInfo.id, user])


    const submitHandler = (e) => {
        e.preventDefault()
    }

    console.log(user)
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                    {
                        loading ? (<LoadingBox />) : error ? (<MessageBox>{error}</MessageBox>) :
                            (
                                <>
                                    <div>
                                        <lable htmlFor="name">Name</lable>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Enter Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <lable htmlFor="email">Email</lable>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <lable htmlFor="pasword">Password</lable>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Enter Pssword"
                                            onChange={(e) => setPassword(e.target.value)}

                                        />
                                    </div>
                                    <div>
                                        <lable htmlFor="confPass">Confirm Password</lable>
                                        <input
                                            id="confPass"
                                            type="password"
                                            placeholder="Enter Confirm Password"
                                            onChange={(e) => setConfPass(e.target.value)}

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
