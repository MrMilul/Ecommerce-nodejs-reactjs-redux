import React from 'react'
import Layout from './components/layout/Layout.js'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/screens/Home.js'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
            <Route exact path="/" component={Home}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}


export default App