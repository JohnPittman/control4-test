import * as ReactDOM from 'react-dom';

import '~/styles/normalize.css';

import '~/styles/colors.css';

import '~/styles/base.css';

function render(getAppComponent) {
    const component = getAppComponent();

    const rootEl = document.getElementById('root');

    ReactDOM.render(component, rootEl);
}

export default render;
