import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '~/styles/normalize.css';

import '~/styles/colors.css';

import '~/styles/base.css';

function render(AppComponent, store) {
    ReactDOM.render(<AppComponent store={store} />, document.getElementById('root'));
}

export default render;
