import React from  'react'
import {BrowserRouter as Router } from 'react-router-dom'
import {productData} from './components/products/data.js'

import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/products'

function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Hero/>
     <Products data={productData}/>
    </Router>
  );
}

export default App;
