import ProductCard from '../ProductCard/ProductCard'
import { CategoryPreviewContainer, CategoryPreviewPreview, CategoryPreviewTitleLink } from './CategoryPreviewStyles'

function CategoryPreview({ title, products }) {

    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryPreviewTitleLink to={title}>{title?.toUpperCase()}</CategoryPreviewTitleLink>
            </h2>
            <CategoryPreviewPreview>
                {products
                    ?.slice(0, 4)
                    .map(item => (<ProductCard key={item.id} product={item} />))}
            </CategoryPreviewPreview>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview