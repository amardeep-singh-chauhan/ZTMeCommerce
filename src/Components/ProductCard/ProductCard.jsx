import React, { useContext } from 'react'
import Button from '../Button/Button'
import { CartContext } from '../../Contexts/CartContext';
import { Footer, Name, Price, ProductCardContainer } from './ProductCardStyles';

function ProductCard({ product }) {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)

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