import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import {store} from './redux/store' 
import Layout from './components/layout/Layout'
import Admin from './components/Admin/Admin'

export default class App extends Component {
  render() {
    return ( 
      <Provider store={store}> 
      <Admin/>
      </Provider>
    )
  }
}

