import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

const Test = ({match}) => {
  if (match.params.testId) {
    return <h1>This is test page {match.params.testId}</h1>
  } else {
    return <h1>This is the default test page</h1>
  }
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
