import React from  'react'
import {BrowserRouter as Router } from 'react-router-dom'
import {productData, productDataTwo} from './components/products/data.js'

import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/products'
import Feature from './components/feature'

function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Hero/>
     <Products heading="Choose Your Favorite" data={productData}/>
     <Feature />
     <Products heading="Sweet Treats for You" data={productDataTwo}/>
    </Router>
  );
}

export default App;
