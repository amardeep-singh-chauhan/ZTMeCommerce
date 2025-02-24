import React, { useContext } from 'react'
import './Shop.scss'
import { CategoriesContext } from '../../Contexts/CategoriesContext'
import ProductCard from '../../Components/ProductCard/ProductCard'

function Shop() {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {
        Object.keys(categoriesMap).map(title => (
          <div key={title}>
            <h2>{title.toUpperCase()}</h2>
            <div className='products-container'>
              {categoriesMap[title].slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Shop