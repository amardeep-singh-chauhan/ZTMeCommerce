import { combineReducers } from 'redux'
import { userReducer } from './User/UserReducer'
import { categoriesReducer } from './Categories/CategoryReducer'
import { cartReducer } from './Cart/CartReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})