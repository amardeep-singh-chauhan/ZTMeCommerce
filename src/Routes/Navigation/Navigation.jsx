import React from 'react'
import './Navigation.scss'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/crown.svg'

function Navigation() {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to="/">
          <Logo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGNIN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation