/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Toggle from './Toggle';

const store = createStore(
  rootReducer,
  {}, // initial state
  composeWithDevTools(), // middleware
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);


export default App;
