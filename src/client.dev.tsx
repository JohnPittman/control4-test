import * as React from 'react';
import { createStore } from 'redux';

import App from '~/components/app/app';
import reducer from '~/infrastructure/reducer';
import renderClient from '~/utils/render-client';

const store = createStore(reducer);

renderClient(<App store={store} />);
