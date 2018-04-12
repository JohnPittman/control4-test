import * as React from 'react';
import { hot } from 'react-hot-loader';

import App from '~/components/app/app';
import store from '~/infrastructure/store';
import renderClient from '~/utils/render-client';

const AppHot = hot(module)(App);

renderClient(AppHot, store);
