import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Raiting from '../constants/Raiting'
import LoadingBox from '../constants/LoadingBox'
import MessageBoX from '../constants/MessageBox'
const Products = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const style = {
        width: "16rem"
    }
    const imgStyle = {
        width: "100%",
        height: "18rem"
    }
    useEffect(() => {
        const fetchData = async () => {

            try {
                setLoading(true)
                const { data } = await axios.get("/api/products")
                setLoading(false)
                setProducts(data.products)

            } catch (error) {
                setError(error.message)
                setLoading(false)

            }

        }

        fetchData()
    }, [])

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