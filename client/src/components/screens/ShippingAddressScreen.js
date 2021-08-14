import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../constants/CheckoutSteps'
import { saveShippingAddress } from '../../redux/actions/Cart'



const ShippingAddressScreen = (props) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [fullName, setFullName] = useState(shippingAddress.fullName)
    const [address, setaddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [country, setCountry] = useState(shippingAddress.country)
    const [postalCode, setpostalCode] = useState(shippingAddress.postalCode)



    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({
            fullName,
            address,
            city,
            country,
            postalCode
        }))
        props.history.push("/payment")
    }
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center">
                <CheckoutSteps step1 step2 />
            </div>


            <div className="row mt-5">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={submitHandler}>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword1">Full Name</label>
                            <input type="text" required
                                value={fullName}
                                className="form-control"
                                id="exampleInputPassword1" onChange={(e) => setFullName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword2">Address</label>
                            <input type="text"
                                required className="form-control"
                                value={address}
                                id="exampleInputPassword2" onChange={(e) => setaddress(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword3">City</label>
                            <input type="text" required className="form-control"
                                value={city}
                                id="exampleInputPassword3" onChange={(e) => setCity(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword4">Country</label>
                            <input type="text" required 
                                value={country}
                            className="form-control" id="exampleInputPassword4" onChange={(e) => setCountry(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword5">Postal Code</label>
                            <input type="text" required
                                value={postalCode}
                                className="form-control" id="exampleInputPassword5" onChange={(e) => setpostalCode(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col"></div>

            </div>

        </div>
    )
}

export default ShippingAddressScreen;