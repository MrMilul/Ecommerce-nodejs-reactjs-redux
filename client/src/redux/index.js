import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


const initialState = {
        cart: {
                cartItems: localStorage.getItem('cartItems')
                        ? JSON.parse(localStorage.getItem('cartItems'))
                        : [],
                shippingAddress: localStorage.getItem('shppingAddress')
                ? JSON.parse(localStorage.getItem('shppingAddress'))
                : {}, 
                paymentMethod: localStorage.getItem('paymentMethod')
                ? localStorage.getItem('paymentMethod')
                : "paypal"
        },
        userSignIn: {
                userInfo: localStorage.getItem('userInfo')
                        ? JSON.parse(localStorage.getItem('userInfo'))
                        : null
        },
        
};


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
        rootReducer,
        initialState,
        composeEnhancer(applyMiddleware(thunk))
);

export default store