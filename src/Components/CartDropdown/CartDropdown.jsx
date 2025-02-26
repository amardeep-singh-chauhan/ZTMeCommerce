import React, { useContext } from 'react'
import Button from '../Button/Button'
import CartItems from '../CartItems/CartItems'
import { CartContext } from '../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartDropdownEmptyMessage, CartDropdownItems } from './CartDropdownStyles'

function CartDropdown() {
    const { setIsCartOpen, cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
        setIsCartOpen(false);
    }

    return (
        <CartDropdownContainer>
            <CartDropdownItems>
                {cartItems.length > 0
                    ? (cartItems.map(item => <CartItems key={item.id} cartItem={item} />))
                    : (<CartDropdownEmptyMessage>Your cart is empty.</CartDropdownEmptyMessage>)}
            </CartDropdownItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown