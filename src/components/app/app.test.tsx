import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from './app';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('App', () => {
    const app = shallow(<App store={{}} />);

    expect(app.text()).toEqual('App');
});
