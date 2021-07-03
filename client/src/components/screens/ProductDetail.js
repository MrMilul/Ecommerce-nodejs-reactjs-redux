import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { ProductDetailAction } from '../../redux/actions/products'
import LoadingBox from '../constants/LoadingBox'
import MessageBox from '../constants/MessageBox'
import Raiting from '../constants/Raiting'



export default function ProductDetail(props) {
   const [Qty, setQty] = useState(1)
    const productId = props.match.params.id
    
    const dispatch = useDispatch()
    const productDet = useSelector(state => state.productDetail)
    const { loading, error, product } = productDet
    
    const AddToCartHandler = ()=>{
        props.history.push(`/cart/${product._id}?qty=${Qty}`)
    }   
    
    useEffect(()=>{
        dispatch(ProductDetailAction(productId))
    }, [dispatch, productId])
    return (
      <>
        {
            loading ? (<LoadingBox />) : error ? (<MessageBox status={"danger"} message={error} />)
                :(
                    <div className="container m-4">
                        <div className="row">

                            <div className="col-lg-6 col-sm-12 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={product.img} className="img" style={{width: "100%"}}alt={product.img}/>                                   
                                    </div>
                                 </div>
                            </div>

                            <div className="col-lg-3 col-sm-12 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>{product.name}</h4>
                                        <Raiting raiting={product.raiting}/>
                                        Number of Reviews: <span>{product.numReview}</span><br/>
                                        Price: {product.price}$<br/>
                                        <h5>Description:</h5> {product.desc}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-12 mb-3">
                             <div className="card" >
                                    <div className="card-body">
                                       <ul className="p-3" >
                                           <li>Price : {product.price}</li>
                                           <li>
                                                status: {''}
                                                {product.countInStock > 0 ? 'In Stock' : 'Unavailabe'}
                                           </li>
                                           <li>
                                               QTY: {product.countInStock > 0 && (
                                                   <>
                                                   <select value={Qty} onChange={(e=>setQty(e.target.value))}>
                                                       {[...Array(product.countInStock).keys()].map((x)=>(
                                                           <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                       ))}
                                                   </select>
                                               
                                               <button onClick={AddToCartHandler} className="btn btn-outline-success btn-block">
                                                    Add to Cart
                                                </button>
                                                </>
                                                )
                                               }
                                                
                                           </li>
                                       </ul>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    </> 
    )
}
