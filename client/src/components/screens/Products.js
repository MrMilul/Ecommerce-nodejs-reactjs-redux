import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Raiting from '../constants/Raiting'

const Products = ()=> {

    const [products, setProducts] = useState([])

    const style = {
        width : "18rem"
    }
    const imgStyle ={
        width: "100%", 
        height: "18rem"
    }
    useEffect(()=>{
       const fetchData = async  ()  =>{
           try{
               const {data} = await axios.get("/api/products")
               setProducts(data.products)
            data.products.map(item=>{
                console.log(item)
            })
           }catch(error){
            console.log(error)
           }
           
       }
    
       fetchData()
    }, [])
    
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
                            <p>Number of Review: {product.numReview}</p>
                            <Raiting raiting={product.raiting}/> 
                            
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