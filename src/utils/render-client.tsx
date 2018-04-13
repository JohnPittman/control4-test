import * as ReactDOM from 'react-dom';

import '~/styles/normalize.css';

import '~/styles/colors.css';

import '~/styles/base.css';

function render(component) {
    ReactDOM.render(component, document.getElementById('root'));
}

export default render;
