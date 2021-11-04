import React from 'react'
import {useSelector, useDispatch}     from 'react-redux'
import { Link } from 'react-router-dom'

import { signOut } from '../../redux/actions/User'
import { FaUserCircle } from 'react-icons/fa'


export default function Layout(props) {
    const dispatch = useDispatch()
    const cartItem = useSelector((state)=>state.cart.cartItems)
    const user = useSelector(state => state.userSignIn)
    const {loading, error, userInfo} = user
    const signOutHandler = ()=>{
        dispatch(signOut())
    }
    return (
        <>
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Ecommerce</Link>
                <button className="navbar-toggler" type="button"
                 data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                        </ul>

                        <form className="form-inline mr-auto my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" 
                            type="submit">Search</button>
                        </form>

                        <div className="mr-3">
                        <Link to="/cart"><i className="fas fa-shopping-cart" style={{color: "green"}}></i></Link>
                            
                            {
                                cartItem.length > 0 &&(
                                    <span className="badge badge-pill badge-danger">{cartItem.length}</span>
                                )
                            }
                            
                        </div>
                        <div>
                            {
                                userInfo ? <div className="btn-group mr-5">
                                <div className="btn-group dropdown" role="group">
                                    <button type="button" 
                                    className="btn btn-success dropdown-toggle dropdown-toggle-split" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropleft</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a onClick={signOutHandler}className="dropdown-item" href="#">SignOut</a>
                                        <Link className="dropdown-item" to="/orderHistory">Order History</Link>
                                        <Link className="dropdown-item" to="/profile">Profile </Link>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-outline-success">
                                    <FaUserCircle  className="mr-2"/>
                                    {userInfo.name.toUpperCase()}                      
                                </button>
                            </div>
                                : <Link className="btn btn-outline-success mr-2" to="/signin">Sing In</Link>
                            }
                            
                        </div>
                       
                        
                </div>
            </nav>
            <div>{props.children}</div>
        </div>
        </>
    )
}
