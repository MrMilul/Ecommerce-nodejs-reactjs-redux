import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux'



import Layout from './components/layout/Layout.js'
import Home from './components/screens/Home.js'
import store from './redux'


const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Layout>
              <Route exact path="/" component={Home}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    
  )
}


export default App