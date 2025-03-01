import { CartIconContainer, CartItemCount, CartShoppingIcon } from './CartIconStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../Redux/Cart/CartSelector';
import { setIsCartOpen } from '../../Redux/Cart/CartActions';

function CartIcon({ show }) {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <CartShoppingIcon className='shopping-icon' />
            <CartItemCount>{cartCount}</CartItemCount>
        </CartIconContainer>
    )
}

export default CartIcon