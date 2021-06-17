import React, { useEffect, useState} from 'react'
import {  useDispatch, useSelector} from 'react-redux'
import { produtsList } from '../../redux/actions/products'


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

                                    <div key={product.id} className="card m-2" style={style} >
                                        <img style={imgStyle} src={product.img} className="card-img-top" alt="pic" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.desc}</p>
                                            <a href="#" className="btn btn-success">Add to Card</a>
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