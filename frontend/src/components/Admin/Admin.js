import React, { Component, Fragment } from 'react'


import ProductPostForm from './productPostForm'
import Header from './layout/Header'


class Admin extends Component {
    constructor(props){
        super(props)
    }
   
   
    render() {
       
        return (
            <Fragment>
            <Header/>
            <div className='container'>
                <div className='row'>
                <div className='col-md-3'></div>
                <ProductPostForm/>
                <div className='col-md-3'></div>
                </div>
            </div>
            
            </Fragment>
            
        )
    }
}

export default Admin