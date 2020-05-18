import React from 'react'
import './collections-overview.styles.scss'
import { connect } from 'react-redux'

import { selectShopData } from '../../redux/shop/shop.selector'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({shopData}) => (
    <div>
        {
            Object.keys(shopData).map( key => {
                const {id, ...otherProps} = shopData[key]
                return <CollectionPreview className="collection-preview" key={id} {...otherProps} />
            })
        }
    </div>
)

const mapStateToProps = (state) => ({
    shopData: selectShopData(state)
})

export default connect(mapStateToProps)(CollectionsOverview)