import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview'
import Category from '../Category/Category'
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../Redux/Categories/CategoryActions';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCategoriesAsync()); // for Thunk

    dispatch(fetchCategoriesStart()); // for Saga
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop