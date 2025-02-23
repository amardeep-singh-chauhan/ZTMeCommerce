import React, { useContext } from 'react'
import './CheckoutItems.scss'
import { CartContext } from '../../Contexts/CartContext';

function CheckoutItems({ cartItem }) {
    console.log(cartItem, "Check");
    const { name, imageUrl, price, quantity } = cartItem;
    const { updateCartItemQuantity, removeCartItem } = useContext(CartContext);

    const handleItemIncrement = () => updateCartItemQuantity(cartItem, "add");
    const handleItemDecrement = () => updateCartItemQuantity(cartItem, "remove");
    const handleItemRemove = () => removeCartItem(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={handleItemDecrement}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={handleItemIncrement}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={handleItemRemove}>&#10005;</div>
        </div>
    )
}

export default CheckoutItems