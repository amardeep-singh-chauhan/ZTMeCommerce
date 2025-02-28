import { createContext, useReducer } from "react";
import { createAction } from "../Utils/Reducer/Reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.some(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeItemFromCart = (cartItems, productToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
}

const changeCartItemQuantity = (cartItems, productToUpdate, type) => {
    if (type === "add") {
        return cartItems.map(cartItem => cartItem.id === productToUpdate.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    } else if (type === "remove") {
        return cartItems
            .map(cartItem => cartItem.id === productToUpdate.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem)
            .filter(cartItem => cartItem.quantity > 0)
    }
    return cartItems;
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0,
    cartTotalPrice: 0,
    removeCartItem: () => { },
    updateCartItemQuantity: () => { },
})

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotalPrice: 0,
}

export const CART_ACTION_TYPES = {
    SET_CART_TOGGLE: 'SET_CART_TOGGLE',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
    UPDATE_CART_ITEM_QUANTITY: 'UPDATE_CART_ITEM_QUANTITY',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL_PRICE: 'SET_CART_TOTAL_PRICE',
    SET_CART_TOTALS: 'SET_CART_TOTALS',
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_TOGGLE:
            return { ...state, isCartOpen: payload };
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
        case CART_ACTION_TYPES.REMOVE_CART_ITEM:
        case CART_ACTION_TYPES.UPDATE_CART_ITEM_QUANTITY:
            return { ...state, cartItems: payload };
        case CART_ACTION_TYPES.SET_CART_TOTALS:
            return { ...state, cartCount: payload.newCartCount, cartTotalPrice: payload.totalPrice };
        default:
            throw new Error(`Unknown type of action ${type} in cartReducer`);
    }
}

export const CartProvider = ({ children }) => {

    const [{ isCartOpen, cartItems, cartCount, cartTotalPrice }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
    //     const totalPrice = cartItems.reduce((price, cartItem) => price + (cartItem.price * cartItem.quantity), 0);
    //     dispatch(createAction(CART_ACTION_TYPES.SET_CART_TOTALS, { newCartCount, totalPrice }))
    // }, [cartItems])

    const updateCartTotals = (updatedCartItems) => {
        const newCartCount = updatedCartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
        const totalPrice = updatedCartItems.reduce((price, cartItem) => price + cartItem.price * cartItem.quantity, 0);
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_TOTALS, { newCartCount, totalPrice }));
    };

    const setIsCartOpen = (payload) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_TOGGLE, payload))
    }

    const addItemToCart = (productToAdd) => {
        const updatedCartItems = addCartItem(cartItems, productToAdd);
        dispatch(createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, updatedCartItems));
        updateCartTotals(updatedCartItems);
    }

    const removeCartItem = (productToRemove) => {
        const updatedCartItems = removeItemFromCart(cartItems, productToRemove);
        dispatch(createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM, updatedCartItems));
        updateCartTotals(updatedCartItems);
    }

    const updateCartItemQuantity = (productToUpdate, type) => {
        const updatedCartItems = changeCartItemQuantity(cartItems, productToUpdate, type);
        dispatch(createAction(CART_ACTION_TYPES.UPDATE_CART_ITEM_QUANTITY, updatedCartItems));
        updateCartTotals(updatedCartItems);
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, cartTotalPrice, updateCartItemQuantity, removeCartItem };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}