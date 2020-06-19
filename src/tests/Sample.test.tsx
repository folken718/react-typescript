import Sample from '../Example Components/Sample';
import { shallow } from 'enzyme';
import React from 'react';

describe('Sample component test suite', () => {
  test('Rendering test', () => {
    const mock = shallow(<Sample msg={'Example'} />);
    expect(mock).toBeTruthy();
  });
});
