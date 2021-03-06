/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import rootReducer from './rootReducer';


import logo from './logo.svg';
import './App.css';
import MovieList from './movies/MovieList';
import MovieDetail from './movies/MovieDetail';
import Toggle from './toggle/Toggle';

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  // {},  initial state
  load(), // if inial state exist then load it from local -> redux store
  composeWithDevTools(applyMiddleware(...middleware, save())), // middleware
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
