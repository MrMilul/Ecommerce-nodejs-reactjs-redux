import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { ProductDetailAction } from '../../redux/actions/products'
import LoadingBox from '../constants/LoadingBox'
import MessageBox from '../constants/MessageBox'
import Raiting from '../constants/Raiting'



export default function ProductDetail(props) {
   
    const productId = props.match.params.id
    const dispatch = useDispatch()
    const productDet = useSelector(state => state.productDetail)
    const { loading, error, product } = productDet
    useEffect(()=>{
        dispatch(ProductDetailAction(productId))
    }, [dispatch])
    return (
      <>
        {
            loading ? (<LoadingBox />) : error ? (<MessageBox status={"danger"} message={error} />)
                :(
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                            <div className="card">
                                    <div className="card-body">
                                    <img src={product.img} className="img-fluid" alt={product.img}/>                                    </div>
                                </div>
                               
                            </div>
                            <div className="col">
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
                            <div className="col">
                            <div className="card" >
                                    <div className="card-body">
                                        Price: {product.price}$<br/>

                                        
                                        Qyt:
                                        <select id="cars" className="mr-auto">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>
                                        </select>
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
