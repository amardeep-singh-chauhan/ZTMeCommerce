import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './NavigationStyles';
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/crown.svg'
import { signOutUser } from '../../Utils/Firebase/Firebase.utils'
import CartIcon from '../../Components/CartIcon/CartIcon'
import CartDropdown from '../../Components/CartDropdown/CartDropdown'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../Redux/User/UserSelector';
import { selectIsCartOpen } from '../../Redux/Cart/CartSelector';

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);

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