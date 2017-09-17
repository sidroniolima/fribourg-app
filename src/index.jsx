import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import reducers from './reducers';

import AppOrAuth from './components/auth_or_app';
import App from './main/app';

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <AppOrAuth />
    </Provider>
, document.getElementById('app')
);