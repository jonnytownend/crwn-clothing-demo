import React from 'react'
import './collections-overview.styles.scss'
import { connect } from 'react-redux'

import { selectCollectionsAsArray } from '../../redux/shop/shop.selector'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({collections}) => (
    <div>
        {
            collections.map( ({id, ...otherProps}) => {
                return <CollectionPreview className="collection-preview" key={id} {...otherProps} />
            })
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections: selectCollectionsAsArray(state)
})

export default connect(mapStateToProps)(CollectionsOverview)