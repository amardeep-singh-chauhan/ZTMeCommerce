import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
        const totalPrice = cartItems.reduce((price, cartItem) => price + (cartItem.price * cartItem.quantity), 0);
        setCartCount(newCartCount);
        setCartTotalPrice(totalPrice);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeCartItem = (productToRemove) => {
        setCartItems(removeItemFromCart(cartItems, productToRemove));
    }

    const updateCartItemQuantity = (productToUpdate, type) => {
        setCartItems(changeCartItemQuantity(cartItems, productToUpdate, type));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, cartTotalPrice, updateCartItemQuantity, removeCartItem };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}