import React from 'react'
import { connect } from 'react-redux'

import { selectCollectionsAsArray } from '../../redux/shop/shop.selector'

import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ collections }) => (
    <div className="directory-menu">
        {collections?.map( collection => {
            const {id, items, ...sectionProps} = collection
            return <MenuItem key={id} imageUrl={items[0].imageUrl} {...sectionProps} />
        })

        }

    </div>
)

const mapStateToProps = (state) => ({
    collections: selectCollectionsAsArray(state)
})

export default connect(mapStateToProps)(Directory)