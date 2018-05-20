import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HumanGuess from './HumanGuess';

configure({ adapter: new Adapter() });

describe('HumanGuess initial state', () => {
  it('Should secret number be greater than 0', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().secretNumber).toBeGreaterThan(0);
  });
  it('Should secret number be less than 100', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().secretNumber).toBeLessThan(100);
  });
  it('Should initial message be correct', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().message).toMatch('Well, I am thinking of a number between 1 and 100.');
  });
  it('Should initial limit of guesses be 10', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().remainingGuesses).toEqual(10);
  });
  it('Should initial guess number be empty', () => {
    const wrapper = shallow(<HumanGuess />);
    expect(wrapper.state().guessNumber).toMatch('');
  });
});

describe('Make guesses functionality', () => {
  it('Should set message when secret number is higher', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 10 });
    wrapper.find('#makeGuessBtn').simulate('click');
    expect(wrapper.state().message).toMatch('The secret number is higher than 10.');
  });
  it('Should set message when secret number is lower', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 90 });
    wrapper.find('#makeGuessBtn').simulate('click');
    expect(wrapper.state().message).toMatch('The secret number is lower than 90.');
  });
  it('Should set message when secret number is equal', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 50 });
    wrapper.find('#makeGuessBtn').simulate('click');
    expect(wrapper.state().message).toMatch('You guess it, the secret number is 50.');
  });
  it('Should remaining guesses decrease by one', () => {
    const wrapper = shallow(<HumanGuess />);
    const remainingGuesses = wrapper.state().remainingGuesses;
    wrapper.setState({ secretNumber: 50, guessNumber: 10 });
    wrapper.find('#makeGuessBtn').simulate('click');
    expect(wrapper.state().remainingGuesses).toBe(remainingGuesses - 1);
  });
});

describe('HumanGuess renders the correct message', () => {
  it('Should render message for higher secret number', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 25 });
    wrapper.find('#makeGuessBtn').simulate('click');
    expect(wrapper.find('.alert').text()).toMatch('The secret number is higher than 25.');
  });
  it('Should render message for lower secret number', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 75 });
    wrapper.find('#makeGuessBtn').simulate('click');
    expect(wrapper.find('.alert').text()).toMatch('The secret number is lower than 75.');
  });
  it('Should alert have success style', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ secretNumber: 50, guessNumber: 50 });
    wrapper.find('#makeGuessBtn').simulate('click');
    expect(wrapper.find('.alert').hasClass('alert-success')).toEqual(true);
  });
});

describe('Restart game functionality', () => {
  it('Should reset remaining number of guesses', () => {
    const wrapper = shallow(<HumanGuess />);
    wrapper.setState({ remainingGuesses: 5 });
    wrapper.find('#restartBtn').simulate('click');
    expect(wrapper.state().remainingGuesses).toBe(10);
  });
  it('Should reset message', () => {
    const wrapper = shallow(<HumanGuess />);
    const { message } = wrapper.state();
    wrapper.setState({ message: 'Test message' });
    wrapper.find('#restartBtn').simulate('click');
    expect(wrapper.state().message).toMatch(message);
  });
  it('Should reset guess number', () => {
    const wrapper = shallow(<HumanGuess />);
    const { guessNumber } = wrapper.state();
    wrapper.setState({ guessNumber: 25 });
    wrapper.find('#restartBtn').simulate('click');
    expect(wrapper.state().guessNumber).toBe(guessNumber);
  });
  it('Should reset success', () => {
    const wrapper = shallow(<HumanGuess />);
    const { success } = wrapper.state();
    wrapper.setState({ success: 25 });
    wrapper.find('#restartBtn').simulate('click');
    expect(wrapper.state().success).toBe(success);
  });
});
