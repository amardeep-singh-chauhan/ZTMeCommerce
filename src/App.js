import React from 'react'
import './App.css'
import Home from './Routes/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Routes/Navigation/Navigation'
import SignIn from './Routes/SignIn/SignIn'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App