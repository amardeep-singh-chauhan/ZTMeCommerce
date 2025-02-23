import React, { useContext } from 'react'
import './CartDropdown.scss'
import Button from '../Button/Button'
import CartItems from '../CartItems/CartItems'
import { CartContext } from '../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'

function CartDropdown() {
    const { setIsCartOpen, cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
        setIsCartOpen(false);
    }

    return (
        <div className='card-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item => <CartItems key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown