import { combineReducers } from 'redux'
import {productsListReducer, 
    productDetail} from './products'
import { cartReducer } from './cart'
import { userDetailReducer, userRegisterReducer,userSignInReducer, userUpdateProfileReducer } from './user'
import {OrderCreateReducer, orderDetailReducer, payOrder, orderMineListReducer} from './orderReducer'

const rootReducer = combineReducers({
    productList: productsListReducer,
    productDetail,
    cart: cartReducer,
    userRegister: userRegisterReducer,
    userSignIn: userSignInReducer, 
    orderCreate: OrderCreateReducer,
    orderDetail: orderDetailReducer,
    payOrder,
    orderMineList: orderMineListReducer,
    userDetails : userDetailReducer,
    userUpdateProfile: userUpdateProfileReducer

})


export default rootReducer