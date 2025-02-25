import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import CheckoutItems from '../../Components/CheckoutItems/CheckoutItems';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, HeaderTotal } from './CheckoutStyles';

function Checkout() {
    const { cartItems, cartTotalPrice } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(cartItem => <CheckoutItems key={cartItem.id} cartItem={cartItem} />)}
            <HeaderTotal>Total: ${cartTotalPrice}</HeaderTotal>
        </CheckoutContainer>
    )
}

export default Checkout