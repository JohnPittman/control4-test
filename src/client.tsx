import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from '~/components/app/component';
import reducer from '~/infrastructure/reducer';

import '~/style-guide/normalize.css';

import '~/style-guide/colors.css';

import '~/style-guide/base.css';

import '~/images/favicon.ico';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
);
