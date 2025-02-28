import { combineReducers } from 'redux'
import { userReducer } from './User/UserReducer'
import { categoriesReducer } from './Categories/CategoryReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
})