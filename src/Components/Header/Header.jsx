import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/crown.svg'
import { auth } from '../../Firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import Cart from '../Cart/Cart'

function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                }
                <CartIcon />
            </div>
            {!hidden && <Cart />}
        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);