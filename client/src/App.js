import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'



import Layout from './components/layout/Layout.js'
import Home from './components/screens/Home.js'
import store from './redux'
import ProductDetail from './components/screens/ProductDetail.js'
import Cart from './components/screens/Cart.js'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Layout>
              <Route exact path="/" component={Home}/>
              <Route path="/product/:id" component={ProductDetail}/>
              <Route path="/cart/:id?" component={Cart}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    
  )
}


export default App