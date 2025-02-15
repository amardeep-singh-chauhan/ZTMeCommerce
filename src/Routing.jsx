import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

function Routing() {
  return (
    <Routes>
        <Route exact path='/' Component={Home} />
    </Routes>
  )
}

export default Routing