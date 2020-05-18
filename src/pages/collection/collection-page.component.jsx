import React from 'react'
import './collection-page.styles.scss'
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selector'

import EmptyState from '../../components/empty-state/empty-state.component'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({shopCollection, match}) => {
    const categoryName = match.params.categoryName
    const category = shopCollection(categoryName)

    if (category === undefined) {
        return <EmptyState />
    }

    return (
        <div className='collection'>
            <h1 className='title'>{category.title.toUpperCase()}</h1>
            <div className='category-content'>
                {
                    category.items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    shopCollection: (collectionName) => selectCollection(collectionName)(state)
})

export default connect(mapStateToProps)(CollectionPage)