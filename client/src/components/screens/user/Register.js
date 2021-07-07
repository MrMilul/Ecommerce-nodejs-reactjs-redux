import React, {useState} from 'react'
import { useDispatch } from 'react-redux'


import { userRegisteration } from '../../../redux/actions/User'
import MessageBox from '../../constants/MessageBox';

const Register = () => {
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, SetconfirmPassword] = useState("");
    const [confPassError, setconfPassError] = useState(false);

    const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
        
        if(confirmPassword !== password){
            setconfPassError(true)
        }else{
            dispatch(userRegisteration(name, email, password))

        }
    }
    return (
        <div className="container mt-5">
            <div className="row">
                    <div className="col"></div>


                    <div className="col border">
                        <form className="m-3" onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail2">Name</label>
                                <input type="Name" className="form-control" 
                                id="exampleInputEmail2" 
                                aria-describedby="emailHelp"
                                onChange={(e)=> SetName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control"
                                 id="exampleInputEmail1" aria-describedby="emailHelp"
                                 onChange={(e)=> SetEmail(e.target.value)}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" 
                                id="exampleInputPassword1"
                                onChange={(e)=> SetPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                                <input type="password" className="form-control" 
                                id="exampleInputPassword2"
                                onChange={(e)=> SetconfirmPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>


                    <div className="col">
                       {
                           confPassError && (
                               <MessageBox status={"danger"}> 
                               <p>Given Psswords Does Not Match! Try it again</p>
                               </MessageBox>
                           )
                       }
                    </div>
            </div>
        </div>
    )
}

export default Register;