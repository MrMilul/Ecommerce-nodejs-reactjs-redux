import React from 'react'
import {products} from './data'

const Products = ()=> {

    console.log(products)
    const style = {
        width : "18rem"
    }
    const imgStyle ={
        width: "100%", 
        height: "18rem"
    }
    return (
        <div className="container mt-5"> 
        <div className="row">
            {
                products.map(product=>{
                    return(
                    <div  key={product.id} className="card m-2" style={style} >
                        <img style={imgStyle}src={product.img} className="card-img-top" alt="pic"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.desc}</p>
                            <a href="#" className="btn btn-primary">Add to Card</a>
                        </div>
                    </div>
                    )
                    
                })
            }
           
        </div>
      </div>
    )
}

export default Products