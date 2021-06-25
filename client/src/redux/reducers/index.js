import { combineReducers } from 'redux'
import {productsListReducer, 
    productDetail} from './products'
import { cartReducer } from './cart'


const rootReducer = combineReducers({
    productList: productsListReducer,
    productDetail,
    cart: cartReducer
})


export default rootReducer