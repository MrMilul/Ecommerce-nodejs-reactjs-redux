import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import { userSignIn } from '../../../redux/actions/User'

 const SignIn = () => {


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()

    const submitHandler = (e)=>{
        e.preventDefault();

        dispatch(userSignIn(email, password))

    }
    

    return (
        <div className="container mt-5">
        <div className="row">

                <div className="col"></div>


                <div className="col border">

                    <form className="m-5" onSubmit={submitHandler}>
                       
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" 
                            className="form-control" 
                            id="exampleInputPassword1"
                            onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    
                    <div className="mb-3">
                        <span>New Costumer?</span><Link to="/register"> Create New Account</Link>
                    </div>
                </div>


                <div className="col">
                    {/* error box */}
                </div>
        </div>
    </div>
    )
}

export default SignIn