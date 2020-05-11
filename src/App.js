import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import './App.css';

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { rootResetState, stepThroughTime, globalUndo } from './redux/history/history.actions'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInPage from './pages/sign-in/sign-in-page.component'
import CheckoutPage from './pages/checkout/checkoutpage.component'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser, history } = this.props

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

  handlePlayActions = () => {
    const { stepThroughTime } = this.props
    const firstStateTime = this.props.history[0].timestamp
    this.props.history.forEach((historicState, index) => {
      const timeDiff = (historicState.timestamp.getTime() - firstStateTime.getTime())
      setTimeout(() => {
        stepThroughTime(index)
      }, timeDiff)
    })
  }

  undo = () => {
    this.props.globalUndo()
  }

  render() {
    return (
      <div className='app-content'>
        <div style={{position: 'absolute'}}>
          <button onClick={() => this.props.resetState()}>Reset state</button>
          <button onClick={this.handlePlayActions}>Play actions</button>
          <button onClick={this.undo}>Undo</button>
        </div>
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

const mapStateToProps = (state) => ({
  history: state.history,
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  resetState: () => dispatch(rootResetState()),
  stepThroughTime: (index) => dispatch(stepThroughTime(index)),
  globalUndo: () => dispatch(globalUndo())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
