import React from 'react';
import { shallow } from 'enzyme';
import TestComponent from '../TestComponent';

it('Displays correct text, correct img props', () => {
  const wrapper = shallow(<TestComponent />);

  expect(wrapper.find('.woo').text()).toEqual('Hello world!');
  expect(wrapper.find('img').props()).toEqual({
    alt: 'mountains',
    src: './static/mountains.jpg',
  });
});
