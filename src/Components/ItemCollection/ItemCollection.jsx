import React from 'react'
import './itemCollection.scss'
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux'
import { addItem } from '../../Redux/Cart/cartActions'

function ItemCollection({ item, addItem }) {
    const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)} >ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ItemCollection)