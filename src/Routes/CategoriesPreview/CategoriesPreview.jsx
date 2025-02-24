import React, { useContext } from 'react'
import { CategoriesContext } from '../../Contexts/CategoriesContext'
import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview'

function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext)

    return (
      <>
        {
          Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title]
            return <CategoryPreview title={title} products={products} />
          })
        }
      </>
    )
}

export default CategoriesPreview