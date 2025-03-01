import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../Category/Category'
import { getCategoriesAndDocuments } from '../../Utils/Firebase/Firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../Redux/Categories/CategoryActions';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments()
      dispatch(setCategories(categoriesArray));
    }

    getCategoriesMap()

  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop