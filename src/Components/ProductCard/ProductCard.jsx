import Button from '../Button/Button'
// import { CartContext } from '../../Contexts/CartContext';
import { Footer, Name, Price, ProductCardContainer } from './ProductCardStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../Redux/Cart/CartSelector';
import { addItemToCart } from '../../Redux/Cart/CartActions';

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, imageUrl, price } = product;
    // const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard