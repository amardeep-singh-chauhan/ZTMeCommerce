import React, { useContext } from 'react'
import './Navigation.scss'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/crown.svg'
import { UserContext } from '../../Contexts/UserContext'
import { signOutUser } from '../../Utils/Firebase/Firebase.utils'
import CartIcon from '../../Components/CartIcon/CartIcon'
import CartDropdown from '../../Components/CartDropdown/CartDropdown'

function Navigation() {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser()
  }

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
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>
                {' '}
                SIGN OUT{' '}
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGNIN
              </Link>
            )
          }
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </>
  )
}

export default Navigation