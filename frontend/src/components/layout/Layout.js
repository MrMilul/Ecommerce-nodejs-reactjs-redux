import React, { Component, Fragment} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <header id="header" className="header">               
                    <Navbar/>
                    <Hero/>
                </header>
                {this.props.children}
            </Fragment>       
                )
    }
}
