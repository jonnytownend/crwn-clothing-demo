import React from 'react'
import './shop.styles.scss'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'

import withSpinner from '../../components/with-spinner/with-spinner.component'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection-page.component'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {loading: true}

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot)
            this.props.updateCollections(collections)
            this.setState({loading: false})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromSnapshot()
    }

    render() {
        const { match } = this.props
        return (
            <div className='shop-page'>
                <Switch>
                    <Route path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props} />} exact />
                    <Route path={`${match.path}/:categoryName`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.loading} {...props} />} />
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collections) => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage)