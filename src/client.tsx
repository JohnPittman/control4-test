import * as React from 'react';

import App from '~/components/app/app';
import store from '~/infrastructure/store';
import renderClient from '~/utils/render-client';

renderClient(App, store);
