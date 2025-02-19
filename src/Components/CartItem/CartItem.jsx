import React from 'react'
import './cartItem.scss'

function CartItem({ item : {imageUrl, price, name, quantity }}) {
  return (
    <div className="cart-item">
        <img src={imageUrl} alt="item" className="item-image" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
  )
}

export default CartItem