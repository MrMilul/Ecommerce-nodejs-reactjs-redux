import React, { useEffect} from 'react'
import {  useDispatch, useSelector} from 'react-redux'
import { produtsList } from '../../redux/actions/products'
import { Link } from 'react-router-dom'

import Raiting from '../constants/Raiting'
import LoadingBox from '../constants/LoadingBox'
import MessageBoX from '../constants/MessageBox'


const Products = () => {

    
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList
    const dispatch = useDispatch()
    const style = {
        width: "16rem"
    }
    const imgStyle = {
        width: "100%",
        height: "18rem"
    }
    useEffect(() => {
        dispatch(produtsList())

       
    }, [dispatch])

    return (

        <>
            {
                loading ? (<LoadingBox />) : error ? (<MessageBoX status={"danger"} message={error} />)
                    : (<div className="row">
                        {
                            products.map(product => {
                                return (

                                    <div key={product._id} className="card m-2" style={style} >
                                        <img style={imgStyle} src={product.img} className="card-img-top" alt="pic" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.desc}</p>
                                            <Link to={`product/${product._id}`} className="btn btn-success">More Info</Link>
                                            <p>Number of Review: {product.numReview}</p>
                                            <Raiting raiting={product.raiting} />

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    )
            }

        </>
    )
}

export default Products