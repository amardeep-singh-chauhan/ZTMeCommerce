import React from 'react'
import './itemCollection.scss'

function ItemCollection({ id, name, price, imageUrl }) {
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default ItemCollection