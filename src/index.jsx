import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/index';
import Reducer from './store/reducer';

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
