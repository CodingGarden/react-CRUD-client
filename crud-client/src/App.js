import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import NotFound from './components/NotFound';

import Products from './containers/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/products" component={Products} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
