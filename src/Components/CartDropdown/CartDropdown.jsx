import React, { useContext } from 'react'
import Button from '../Button/Button'
import CartItems from '../CartItems/CartItems'
import { CartContext } from '../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartDropdownItems } from './CartDropdownStyles'

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
                {cartItems.map(item => <CartItems key={item.id} cartItem={item} />)}
            </CartDropdownItems>
            <Button style={{marginTop:'auto'}} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown