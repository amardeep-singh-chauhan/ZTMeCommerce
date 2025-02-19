import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg'
import './cartIcon.scss'
import { connect } from 'react-redux'
import { toogleCartHidden } from '../../Redux/Cart/cartActions'
import { selectCartItemsCount } from '../../Redux/Cart/cartSelectors'

function CartIcon({ toogleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden()),
})

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)