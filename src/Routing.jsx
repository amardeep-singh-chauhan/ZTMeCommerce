import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp'
import { connect } from 'react-redux'

function Routing({ currentUser}) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={currentUser ? <Navigate to="/" replace /> : <SignInAndSignUp />} />
      </Routes>
    </>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

export default connect(mapStateToProps)(Routing)