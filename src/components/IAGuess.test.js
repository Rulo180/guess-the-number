import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IAGuess from './IAGuess';

configure({ adapter: new Adapter() });

describe('Initial state values', () => {
  it('Should generate guess number greater than 0', () => {
    expect(shallow(<IAGuess />).state().guessNumber).toBeGreaterThan(0);
  });
  it('Should generate guess number less than 100', () => {
    expect(shallow(<IAGuess />).state().guessNumber).toBeLessThan(100);
  });
});

describe('Buttons functions', () => {
  it('Should set lower limit if user indicates the number is higher', () => {
    const wrapper = shallow(<IAGuess />);
    const guessNumber = wrapper.state().guessNumber;
    wrapper.find('#gtBtn').simulate('click');
    expect(wrapper.state().lowerLimit).toEqual(guessNumber);
  });
  it('Should set upper limit if user indicates the number is lower', () => {
    const wrapper = shallow(<IAGuess />);
    const guessNumber = wrapper.state().guessNumber;
    wrapper.find('#ltBtn').simulate('click');
    expect(wrapper.state().upperLimit).toEqual(guessNumber);
  });
  it('Should set success to TRUE if user indicates the number is equal', () => {
    const wrapper = shallow(<IAGuess />);
    wrapper.find('#eqBtn').simulate('click');
    expect(wrapper.state().success).toBe(true);
  });
}); 

describe('Restart game functionality', () => {
  it('Should reset lowerLimit value', () => {
    const wrapper = shallow(<IAGuess />);
    const { lowerLimit } = wrapper.state();
    wrapper.setState({ lowerLimit: 25 });
    wrapper.find('#restartBtn').simulate('click');
    expect(wrapper.state().lowerLimit).toBe(lowerLimit);
  });
  it('Should reset upperLimit value', () => {
    const wrapper = shallow(<IAGuess />);
    const { upperLimit } = wrapper.state();
    wrapper.setState({ upperLimit: 25 });
    wrapper.find('#restartBtn').simulate('click');
    expect(wrapper.state().upperLimit).toBe(upperLimit);
  });
  it('Should reset success value', () => {
    const wrapper = shallow(<IAGuess />);
    const { success } = wrapper.state();
    wrapper.setState({ success: 25 });
    wrapper.find('#restartBtn').simulate('click');
    expect(wrapper.state().success).toBe(success);
  });
  it('Should reset guess number value', () => {
    const wrapper = shallow(<IAGuess />);
    wrapper.setState({ guessNumber: 25 });
    wrapper.find('#restartBtn').simulate('click');
    expect(wrapper.state().guessNumber).toBeGreaterThan(0);
    expect(wrapper.state().guessNumber).toBeLessThan(100);
  });
});

describe('Message rendering', () => {
  it('Should render message with the guess number', () => {
    const wrapper = shallow(<IAGuess />);
    const guessNumber = wrapper.state().guessNumber;
    expect(wrapper.find('.alert').text()).toMatch(`My guess is: ${guessNumber}`);
  });
  it('Should render success message', () => {
    const wrapper = shallow(<IAGuess />);
    wrapper.find('#eqBtn').simulate('click');
    expect(wrapper.find('.alert').text()).toMatch('I knew it! Do you want to restart the game?');
  });
});
