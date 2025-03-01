import { useEffect } from 'react'
import './App.css'
import Home from './Routes/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Routes/Navigation/Navigation'
import Authentication from './Routes/Authentication/Authentication'
import Shop from './Routes/Shop/Shop'
import Checkout from './Routes/Checkout/Checkout'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './Utils/Firebase/Firebase.utils'
import { setCurrentUser } from './Redux/User/UserActions'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App