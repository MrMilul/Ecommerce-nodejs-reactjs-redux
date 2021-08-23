import React from 'react'
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import ShippingAddressScreen from './components/screens/ShippingAddressScreen.js'


import Layout from './components/layout/Layout.js'
import Home from './components/screens/Home.js'
import store from './redux'
import ProductDetail from './components/screens/ProductDetail.js'
import Cart from './components/screens/Cart.js'
import SignIn from './components/screens/user/SignIn.js'
import Register from './components/screens/user/Register.js'
import Payment from './components/screens/Payment.js'
import PlaceHolder from './components/screens/PlaceHolder.js'
import OrderScreen from './components/screens/OrderScreen.js'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Layout>
              <Route exact path="/" component={Home}/>
              <Route path="/product/:id" component={ProductDetail}/>
              <Route path="/cart/:id?" component={Cart}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/register" component={Register}/>
              <Route path="/shipping" component={ShippingAddressScreen}/>
              <Route path="/payment" component={Payment}/>
              <Route path="/placeholder" component={PlaceHolder}/>
              <Route path="/order/:id" component={OrderScreen}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    
  )
}


export default App