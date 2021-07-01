import React from 'react'
import {Link} from 'react-router-dom'
 const SignIn = () => {
    return (
        <div className="container mt-5">
        <div className="row">
                <div className="col"></div>


                <div className="col border">

                    <form className="m-5">
                       
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
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