import React from 'react';
import { shallow } from 'enzyme';
import { TestComponentContainer } from '../TestComponentContainer';

function setup() {
  const props = {
    addItem: jest.fn(),
  };

  const enzymeWrapper = shallow(<TestComponentContainer {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}


describe('TestComponentContainer', () => {
  it('Displays correct text, displays button', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('.woo').text()).toEqual('Hello world!');
    expect(enzymeWrapper.find('button').text()).toEqual('Add');
  });
});
