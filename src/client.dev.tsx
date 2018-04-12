import { hot } from 'react-hot-loader';
import { createStore } from 'redux';

import App from '~/components/app/app';
import reducer from '~/infrastructure/reducer';
import renderClient from '~/utils/render-client';

const AppHot = hot(module)(App);
const store = createStore(reducer);

renderClient(AppHot, store);
