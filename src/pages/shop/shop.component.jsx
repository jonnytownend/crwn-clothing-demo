import React from 'react'
import SHOP_DATA from '../../data/shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import './shop.styles.scss'

console.log(SHOP_DATA)

export default class ShopPage extends React.Component {
    constructor() {
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map( ({id, ...otherProps}) => (
                        <CollectionPreview className="collection-preview" key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}