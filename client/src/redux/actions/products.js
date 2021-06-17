import axios from 'axios'

import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from '../types/ProductType'

export const produtsList = ()=> async (dispatch)=>{
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })

   try{
    const {data} = await axios.get('/api/products')
    dispatch({
        type: PRODUCT_LIST_SUCCESS, 
        payload: data.products
    })
   }catch(error){
    dispatch({
        type: PRODUCT_LIST_FAIL, 
        payload: error.message
    })
   }
}

