import { shallow } from 'enzyme';
import React from 'react';
import { createStore } from 'redux';

import App from './component';

function reducer(state, action) {
    return state;
}

const store = createStore(reducer);

test('App', () => {
    const app = shallow(<App store={store} />);

    expect(app).toBeDefined();
});
