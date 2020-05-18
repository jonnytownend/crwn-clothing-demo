import React from 'react'
import { connect } from 'react-redux'

import { selectShopData } from '../../redux/shop/shop.selector'

import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ directory }) => (
    <div className="directory-menu">
        {Object.keys(directory).map( key => { 
            const {id, items, ...sectionProps} = directory[key]
            return <MenuItem key={id} imageUrl={items[0].imageUrl} {...sectionProps} />
        })}
    </div>
)

const mapStateToProps = (state) => ({
    directory: selectShopData(state)
})

export default connect(mapStateToProps)(Directory)