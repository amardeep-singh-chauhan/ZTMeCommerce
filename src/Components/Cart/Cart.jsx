import React from 'react'
import './cart.scss'
import CustomButton from '../CustomButton/CustomButton'

function Cart() {
  return (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default Cart