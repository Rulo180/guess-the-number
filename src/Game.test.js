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

describe('Game Component suite', () => {
  it('Initial game mode is human', () => {
    const wrapper = shallow(<Game/>);
    expect(wrapper.state().mode).toBe('human');
  })
});