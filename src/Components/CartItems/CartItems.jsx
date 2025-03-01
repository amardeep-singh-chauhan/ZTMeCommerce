import { CartItemDetails, CartItemImage, CartItemName, CartItemPrice, CartItemsContainer } from './CartItemsStyles';

function CartItems({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CartItemsContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>{quantity} x ${price}</CartItemPrice>
      </CartItemDetails>
    </CartItemsContainer>
  )
}

export default CartItems