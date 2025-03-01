// import { CartContext } from '../../Contexts/CartContext';
import { CheckoutItemContainer, CheckoutItemImage, CheckoutItemImageContainer, CheckoutItemNameAndPrice, CheckoutItemQuantity, CheckoutItemQuantityArrow, CheckoutItemQuantityValue, CheckoutItemRemoveButton } from './CheckoutItemsStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../Redux/Cart/CartSelector';
import { addItemToCart, clearItemFromCart, removeItemToCart } from '../../Redux/Cart/CartActions';

function CheckoutItems({ cartItem }) {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;
    // const { updateCartItemQuantity, removeCartItem } = useContext(CartContext);

    const handleItemIncrement = () => dispatch(addItemToCart(cartItems, cartItem));
    const handleItemDecrement = () => dispatch(removeItemToCart(cartItems, cartItem));
    const handleItemRemove = () => dispatch(clearItemFromCart(cartItems, cartItem));

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