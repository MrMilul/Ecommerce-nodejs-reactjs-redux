import React from 'react'
import {useSelector}     from 'react-redux'
import { Link } from 'react-router-dom'

import { FaUserCircle } from 'react-icons/fa'


export default function Layout(props) {

    const cartItem = useSelector((state)=>state.cart.cartItems)
    return (
        <>
        
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Ecommerce</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                        
                        <div className="btn-group mr-5">
                        <div className="btn-group dropdown" role="group">
                            <button type="button" 
                            className="btn btn-success dropdown-toggle dropdown-toggle-split" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropleft</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something </a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-success">
                            <FaUserCircle  className="mr-2"/>
                            User                       
                        </button>
                        </div>
                </div>
            </nav>
            <div>{props.children}</div>
        </div>
        </>
    )
}
