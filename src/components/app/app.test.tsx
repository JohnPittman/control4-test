import { shallow } from 'enzyme';
import React from 'react';

import App from './app';

test('App', () => {
    const app = shallow(<App store={{}} />);

    expect(app.text()).toEqual('App');
});
