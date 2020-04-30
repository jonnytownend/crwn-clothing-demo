import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInPage from './pages/sign-in/sign-in-page.component'

const Test = ({match}) => {
  if (match.params.testId) {
    return <h1>This is test page {match.params.testId}</h1>
  } else {
    return <h1>This is the default test page</h1>
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className='app-content'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInPage} />
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
