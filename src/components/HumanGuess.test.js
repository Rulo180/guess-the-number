import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HumanGuess from './HumanGuess';

configure({ adapter: new Adapter() });

describe('HumanGuess initial state', () => {
  it('Secret number is greater than 0', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().secretNumber).toBeGreaterThan(0);
  });
  it('Secret number is less than 100', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().secretNumber).toBeLessThan(100);
  });
  it('Initial message is correct', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().message).toMatch('Well, I am thinking of a number between 1 and 100.');
  });
  it('Initial limit of guesses is 10', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().remainingGuesses).toEqual(10);
  });
  it('Initial guess number is empty', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().guessNumber).toMatch('');
  });
});

describe('HumanGuess compare numbers', () => {
  it('The secret number is greater than guess number', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 10 });
    wrapper.find('#makeGuessButton').simulate('click');
    expect(wrapper.state().message).toMatch('The secret number is higher than 10.');
  });
  it('The secret number is lower than guess number', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 90 });
    wrapper.find('#makeGuessButton').simulate('click');
    expect(wrapper.state().message).toMatch('The secret number is lower than 90.');
  });
  it('The secret number is equal to guess number', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 50 });
    wrapper.find('#makeGuessButton').simulate('click');
    expect(wrapper.state().message).toMatch('You guess it, the secret number is 50.');
  });
});

describe('HumanGuess renders the correct message', () => {
  it('The correct message is rendered when secret number is higher than guess number', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 25 });
    wrapper.find('#makeGuessButton').simulate('click');
    expect(wrapper.find('.alert').text()).toMatch('The secret number is higher than 25.');
  });
});
