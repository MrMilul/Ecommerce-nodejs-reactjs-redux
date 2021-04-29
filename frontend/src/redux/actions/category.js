import { get_categoty_data } from './types' 
import axios from 'axios'



export const getCat = ()=> dispatch =>{
    axios.get('http://localhost:5000/category/')
    .then(res=>{
        dispatch(get_categoty_data(res.data))
    }).catch(err=>{
        console.log(err)
    })
} 

