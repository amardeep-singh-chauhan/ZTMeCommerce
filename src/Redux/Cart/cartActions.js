import cartActionTypes from "./cartTypes";

export const toogleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item,
});