import { combineReducers } from 'redux'
import {productsListReducer, 
    productDetail} from './products'
import { cartReducer } from './cart'
import { userRegisterReducer,userSignInReducer } from './user'
import {OrderCreateReducer, orderDetailReducer, payOrder} from './orderReducer'

const rootReducer = combineReducers({
    productList: productsListReducer,
    productDetail,
    cart: cartReducer,
    userRegister: userRegisterReducer,
    userSignIn: userSignInReducer, 
    orderCreate: OrderCreateReducer,
    orderDetail: orderDetailReducer,
    payOrder

})


export default rootReducer