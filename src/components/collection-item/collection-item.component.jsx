import React from 'react'
import './collection-item.styles.scss'
import UnderlineButton from '../../components/underline-button/underline-button.component'
import BlockButton from '../../components/block-button/block-button.component'

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="overlay"></div>
        </div>
        {/* <UnderlineButton className="add-button" text="Add to card" link="/" /> */}
        <BlockButton className='add-button' value='Add to basket' />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{`£${price}`}</span>
        </div>
    </div>
)

export default CollectionItem