import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../Category/Category'
import { getCategoriesAndDocuments } from '../../Utils/Firebase/Firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategoriesMap } from '../../Redux/Categories/CategoryActions';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      dispatch(setCategoriesMap(categoryMap));
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