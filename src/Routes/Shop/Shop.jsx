import React, { useContext } from 'react'
import './Shop.scss'
import { ProductContext } from '../../Contexts/ProductContext'
import ProductCard from '../../Components/ProductCard/ProductCard'

function Shop() {
  const { products } = useContext(ProductContext)

  return (
    <div className='products-container'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop