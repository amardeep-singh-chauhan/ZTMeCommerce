import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../Contexts/CategoriesContext';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { CategoryContainer, CategoryTitle } from './CategoryStyles';

function Category() {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map(product => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </>
    )
}

export default Category