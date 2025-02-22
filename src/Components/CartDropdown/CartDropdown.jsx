import React from 'react'
import './CartDropdown.scss'
import Button from '../Button/Button'

function CartDropdown() {
  return (
    <div className='card-dropdown-container'>
        <div className="cart-items"/>
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown