import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview'
import { useSelector } from 'react-redux'
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../Redux/Categories/CategorySelector'
import Spinner from '../../Components/Loaders/Spinner/Spinner';

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  // const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {isLoading ? (<Spinner />) :
        (Object.keys(categoriesMap).map((title, idx) => {
          const products = categoriesMap[title]
          return <CategoryPreview key={idx} title={title} products={products} />
        }))
      }
    </>
  )
}

export default CategoriesPreview