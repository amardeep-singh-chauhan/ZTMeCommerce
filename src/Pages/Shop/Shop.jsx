import React from 'react'
import './shop.scss'
import SHOPDATA from './shopData';
import PreviewCollection from '../../Components/PreviewCollection.jsx/PreviewCollection';

function Shop() {
    const collections = SHOPDATA;
    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default Shop