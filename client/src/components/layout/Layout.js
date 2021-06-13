import React from 'react'
import { Link } from 'react-router-dom'

import { FaUserCircle } from 'react-icons/fa'
export default function layout(props) {
    return (
        <>
        
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Ecommerce</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                            </li>
                        </ul>

                        <form class="form-inline mr-auto my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" 
                            type="submit">Search</button>
                        </form>


                        <div class="btn-group mr-5">
                        <div class="btn-group dropdown" role="group">
                            <button type="button" 
                            class="btn btn-success dropdown-toggle dropdown-toggle-split" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="sr-only">Toggle Dropleft</span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something </a>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline-success">
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
