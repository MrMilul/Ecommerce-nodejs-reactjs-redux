import { combineReducers } from 'redux'
import {productsListReducer, 
    productDetail} from './products'


const rootReducer = combineReducers({
    productList: productsListReducer,
    productDetail
})


export default rootReducer