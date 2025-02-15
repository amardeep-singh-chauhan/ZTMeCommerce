import React from 'react'
import './shop.scss'
import SHOPDATA from './shopData';
import PreviewCollection from '../../Components/PreviewCollection.jsx/PreviewCollection';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOPDATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop