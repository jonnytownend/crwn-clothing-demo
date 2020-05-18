import React from 'react'
import './collection-preview.styles.scss'

import { Link, withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component'
import BlockButton from '../block-button/block-button.component'

const CollectionPreview = ({ title, items, location}) => {
    console.log("location: ", location)

    return (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .slice(0,4)
                .map((item) =>
                    <CollectionItem key={item.id} item={item} />
                )
            }
        </div>
        <div className='view-more-button'>
            <Link to={`${location.pathname}/${title.toLowerCase()}`}>
                <BlockButton value='View More' />
            </Link>
        </div>
    </div>
    )
}

export default withRouter(CollectionPreview)