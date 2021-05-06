import React from  'react'
import {BrowserRouter as Router } from 'react-router-dom'
import {productData, productDataTwo, productDataThree} from './components/products/data.js'

import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/products'
import Feature from './components/feature'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Hero/>
     <Products isProduct={true} heading="Choose Your Favorite" 
     data={productData} Vegan="Vegan" Nonvegan="Non-vegan" vitamins="Recommended"/>
     <Feature />
     <Products  isProduct={true} heading="Self Service" data={productDataTwo} 
     Vegan="Fruits" Nonvegan="Carbs" 
     proteins="proteins" oil="oil" vitamins="vitamins"/>
     <Products heading="Our Services" data={productDataThree}/>
     <Footer/>
    </Router>
  );
}

export default App;
