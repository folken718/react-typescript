import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('App render test', () => {
  const mock = shallow(<App />);
  expect(mock).toBeTruthy();
});
