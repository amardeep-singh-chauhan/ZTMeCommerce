import React, { useContext } from 'react'
import './Checkout.scss'
import { CartContext } from '../../Contexts/CartContext'
import CheckoutItems from '../../Components/CheckoutItems/CheckoutItems';

function Checkout() {
    const { cartItems, cartTotalPrice } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItems key={cartItem.id} cartItem={cartItem} />)}
            <span className='total'>Total: ${cartTotalPrice}</span>
        </div>
    )
}

export default Checkout