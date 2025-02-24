import React, { useContext } from 'react'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './NavigationStyles';
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/crown.svg'
import { UserContext } from '../../Contexts/UserContext'
import { signOutUser } from '../../Utils/Firebase/Firebase.utils'
import CartIcon from '../../Components/CartIcon/CartIcon'
import CartDropdown from '../../Components/CartDropdown/CartDropdown'
import { CartContext } from '../../Contexts/CartContext'

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser()
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler}>
                {' '}
                SIGN OUT{' '}
              </NavLink>
            ) : (
              <NavLink to="/auth">
                SIGNIN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks >
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation