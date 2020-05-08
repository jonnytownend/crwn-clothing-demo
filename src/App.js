import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import './App.css';

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { rootResetState } from './redux/root.reducer'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// import { firestore } from './firebase/firebase.utils'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInPage from './pages/sign-in/sign-in-page.component'
import CheckoutPage from './pages/checkout/checkoutpage.component'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log('userAuth:', userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className='app-content'>
        <button style={{position: 'absolute'}} onClick={() => this.props.resetState()}>Reset state</button>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInPage />)} />
          <Route path='/checkout' component={CheckoutPage} />
        </Switch> 
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  resetState: () => dispatch(rootResetState())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
