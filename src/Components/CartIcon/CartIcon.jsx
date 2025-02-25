import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext';
import { CartIconContainer, CartItemCount, CartShoppingIcon } from './CartIconStyles';

function CartIcon({ show }) {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <CartShoppingIcon className='shopping-icon' />
            <CartItemCount>{cartCount}</CartItemCount>
        </CartIconContainer>
    )
}

export default CartIcon