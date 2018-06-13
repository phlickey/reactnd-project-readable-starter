import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import PostsList from './components/PostsList';
import Post from './components/Post'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let history = createHistory();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <div>
              <Sidebar />
              <Route exact path="/" component={PostsList} />
              <Route exact path="/:category" component={PostsList} />
              <Route exact path="/:category/:postId" component={Post} />
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
