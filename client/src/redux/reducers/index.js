import { combineReducers } from 'redux'
import {productsListReducer} from './products'


const rootReducer = combineReducers({
    productList: productsListReducer,
})


export default rootReducer