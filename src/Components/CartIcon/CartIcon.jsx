import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg'
import './cartIcon.scss'
import { connect } from 'react-redux'
import { toogleCartHidden } from '../../Redux/Cart/cartActions'

function CartIcon({ toogleCartHidden }) {
  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
})

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)