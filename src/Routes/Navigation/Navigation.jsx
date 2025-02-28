import React, { useContext } from 'react'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './NavigationStyles';
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/crown.svg'
import { signOutUser } from '../../Utils/Firebase/Firebase.utils'
import CartIcon from '../../Components/CartIcon/CartIcon'
import CartDropdown from '../../Components/CartDropdown/CartDropdown'
import { CartContext } from '../../Contexts/CartContext'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../Redux/User/UserSelector';

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext);
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