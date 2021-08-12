import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CheckoutSteps from '../constants/CheckoutSteps'
import { saveShippingAddress } from '../../redux/actions/Cart'



const ShippingAddressScreen = (props) => {
    const [fullName, setFullName] = useState()
    const [address, setaddress] = useState()
    const [city, setCity] = useState()
    const [country, setCountry] = useState()
    const [postalCode, setpostalCode] = useState()



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
                            <input type="text"
                                className="form-control"
                                id="exampleInputPassword1" onChange={(e) => setFullName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword2">Address</label>
                            <input type="text" className="form-control" id="exampleInputPassword2" onChange={(e) => setaddress(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword3">City</label>
                            <input type="text" className="form-control" id="exampleInputPassword3" onChange={(e) => setCity(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword4">Country</label>
                            <input type="text" className="form-control" id="exampleInputPassword4" onChange={(e) => setCountry(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label Htmlfor="exampleInputPassword5">Postal Code</label>
                            <input type="text" className="form-control" id="exampleInputPassword5" onChange={(e) => setpostalCode(e.target.value)} />
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