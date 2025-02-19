import React from 'react'
import './cart.scss'
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../Redux/Cart/cartSelectors'

function Cart({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Cart)