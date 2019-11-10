import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import AppContainer from './components/App/container/index';
import ErrorBoundary from './components/ErrorBoundary/index';
import rootReducer from './store/reducer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>, document.getElementById('root'),
);
