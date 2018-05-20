import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Game from './Game';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Initial state values', () => {
  it('Initial game mode is human', () => {
    const wrapper = shallow(<Game/>);
    expect(wrapper.state().mode).toBe('human');
  })
});

describe('Change mode functionality', () => {
  it('Should set mode to human', () => {
    const wrapper = shallow(<Game />);
    wrapper.find('#humanModeBtn').simulate('click');
    expect(wrapper.state().mode).toBe('human');
  });
  it('Should set mode to ia', () => {
    const wrapper = shallow(<Game />);
    wrapper.find('#iaModeBtn').simulate('click');
    expect(wrapper.state().mode).toBe('ia');
  });
});