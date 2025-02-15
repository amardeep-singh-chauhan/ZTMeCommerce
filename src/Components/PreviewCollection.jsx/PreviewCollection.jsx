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
                    .map(({id, ...itemProps}) => (
                        <ItemCollection key={id} {...itemProps}/>
                    ))}
            </div>
        </div>
    )
}

export default PreviewCollection