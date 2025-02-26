import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext';
import { CheckoutItemContainer, CheckoutItemImage, CheckoutItemImageContainer, CheckoutItemNameAndPrice, CheckoutItemQuantity, CheckoutItemQuantityArrow, CheckoutItemQuantityValue, CheckoutItemRemoveButton } from './CheckoutItemsStyles';

function CheckoutItems({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    const { updateCartItemQuantity, removeCartItem } = useContext(CartContext);

    const handleItemIncrement = () => updateCartItemQuantity(cartItem, "add");
    const handleItemDecrement = () => updateCartItemQuantity(cartItem, "remove");
    const handleItemRemove = () => removeCartItem(cartItem);

    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage src={imageUrl} alt={name} />
            </CheckoutItemImageContainer>
            <CheckoutItemNameAndPrice>{name}</CheckoutItemNameAndPrice>
            <CheckoutItemQuantity>
                <CheckoutItemQuantityArrow onClick={handleItemDecrement}>&#10094;</CheckoutItemQuantityArrow>
                <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>
                <CheckoutItemQuantityArrow onClick={handleItemIncrement}>&#10095;</CheckoutItemQuantityArrow>
            </CheckoutItemQuantity>
            <CheckoutItemNameAndPrice>{price}</CheckoutItemNameAndPrice>
            <CheckoutItemRemoveButton onClick={handleItemRemove}>&#10005;</CheckoutItemRemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItems