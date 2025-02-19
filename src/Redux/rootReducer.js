import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import cartReducer from "./Cart/cartReducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
})