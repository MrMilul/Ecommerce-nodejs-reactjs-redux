import { combineReducers } from 'redux'
import {productsListReducer, 
    productDetail} from './products'
import { cartReducer } from './cart'
import { userReducer } from './user'


const rootReducer = combineReducers({
    productList: productsListReducer,
    productDetail,
    cart: cartReducer,
    userInfo: userReducer
})


export default rootReducer