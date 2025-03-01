import Button from '../Button/Button'
import CartItems from '../CartItems/CartItems'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartDropdownEmptyMessage, CartDropdownItems } from './CartDropdownStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../Redux/Cart/CartSelector'
import { setIsCartOpen } from '../../Redux/Cart/CartActions'

function CartDropdown() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    // const { setIsCartOpen, cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
        dispatch(setIsCartOpen(false));
    }

    return (
        <CartDropdownContainer>
            <CartDropdownItems>
                {cartItems.length > 0
                    ? (cartItems.map(item => <CartItems key={item.id} cartItem={item} />))
                    : (<CartDropdownEmptyMessage>Your cart is empty.</CartDropdownEmptyMessage>)}
            </CartDropdownItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown