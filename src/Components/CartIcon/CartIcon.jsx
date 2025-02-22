import React, { useContext } from 'react'
import './CartIcon.scss'
import {ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg'
import { CartContext } from '../../Contexts/CartContext';

function CartIcon({show}) {
    const {isCartOpen ,setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div onClick={toggleIsCartOpen} className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon