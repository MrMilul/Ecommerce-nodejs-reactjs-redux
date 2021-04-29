import { GET_CATEGOTY_DATA } from '../actions/types'


const initialState = {
    catData: {
        count: null,
        categories: []
    }
}

const categoryReducer = (state=initialState, action)=> {
    switch(action.type){
        case GET_CATEGOTY_DATA:
            return {
                ...state, 
                catData:{
                    count: action.payload.count,
                    categories: action.payload.data
                } 
            }
        default: return state
    }
}

export default categoryReducer