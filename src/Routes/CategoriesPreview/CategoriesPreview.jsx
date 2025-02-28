import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../Redux/Categories/CategorySelector'

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  // const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {
        Object.keys(categoriesMap).map((title, idx) => {
          const products = categoriesMap[title]
          return <CategoryPreview key={idx} title={title} products={products} />
        })
      }
    </>
  )
}

export default CategoriesPreview