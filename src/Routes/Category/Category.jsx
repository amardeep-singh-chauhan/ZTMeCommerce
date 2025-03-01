import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard';
import { CategoryContainer, CategoryTitle } from './CategoryStyles';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../Redux/Categories/CategorySelector';
import Spinner from '../../Components/Loaders/Spinner/Spinner';

function Category() {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    // const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {isLoading ? (<Spinner />) :
                (<CategoryContainer>
                    {products && products.map(product => <ProductCard key={product.id} product={product} />)}
                </CategoryContainer>)
            }
        </>
    )
}

export default Category