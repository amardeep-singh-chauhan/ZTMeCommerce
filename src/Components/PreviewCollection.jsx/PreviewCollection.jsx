import React from 'react'
import './previewCollection.scss';
import ItemCollection from '../ItemCollection/ItemCollection';

function PreviewCollection({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .slice(0, 4)
                    .map((item) => (
                        <ItemCollection key={item.id} item={item} />
                    ))}
            </div>
        </div>
    )
}

export default PreviewCollection