import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Header from './Components/Header/Header'

function Routing() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/shop' Component={Shop} />
      </Routes>
    </>
  )
}

export default Routing