import React from 'react'
import './CategoryPreview.scss'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'

function CategoryPreview({ title, products }) {

    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title?.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {products
                    ?.slice(0, 4)
                    .map(item => (<ProductCard key={item.id} product={item} />))}
            </div>
        </div>
    )
}

export default CategoryPreview