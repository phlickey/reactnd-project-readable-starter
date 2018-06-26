import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './style/index.css';
import Readable from './components/Readable';
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Readable />
      </Provider>
    );
  }
}

export default App;
