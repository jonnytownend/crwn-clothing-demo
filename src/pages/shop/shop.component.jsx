import React from 'react'
import './shop.styles.scss'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection-page.component'

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Switch>
            <Route path={`${match.path}`} component={CollectionsOverview} exact />
            <Route path={`${match.path}/:categoryName`} component={CollectionPage} />
        </Switch>
    </div>
)

export default connect()(ShopPage)