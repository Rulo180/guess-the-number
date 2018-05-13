import React, { Component } from 'react';

class HumanGuess extends Component {
    constructor(props) {
        super(props);
		this.state = {
			message: '',
			secretNumber: null,
			guessNumber: '',
			numberOfGuesses: 0,
		};
		this.__handleChange = this.__handleChange.bind(this);
		this.__makeGuess = this.__makeGuess.bind(this);
		this.__startGame = this.__startGame.bind(this);
    }
    componentDidMount() {
		this.__startGame();
	}
	__startGame() {
		this.setState({
			secretNumber: Math.floor(Math.random() * 100 + 1),
			message: 'You have to make a guess, bro!',
			guessNumber: '',
			numberOfGuesses: 0,
		})
	}
	__makeGuess() {
		let { secretNumber, guessNumber, numberOfGuesses } = this.state,
		message = '';
		if ( secretNumber > guessNumber) {
			message = 'The secret number is higher.';
		} else if (secretNumber < guessNumber) {
			message = 'The secret number is lower.';
		} else if (secretNumber == guessNumber) {
			message = 'Congratz! Your guess is correct.';
		} else {
			message = 'error';
		}
		this.setState({
			message,
			numberOfGuesses: numberOfGuesses + 1
		});
	}
	__handleChange(event) {
		const value = event.target.value;
		this.setState({
			guessNumber: value
		});
	}
	render() {
		return (
		<div>
			<label>Make a guess:</label>
			<br />
			<input
				value={this.state.guessNumber}
				onChange={this.__handleChange}
				type="number"
				min="0"
				max="100"
			/>
			<button onClick={this.__makeGuess}>Let's try!</button>
			<p>{this.state.message}</p>
			<p>secret number: {this.state.secretNumber}</p>
			<p>guess: {this.state.guessNumber}</p>
			<p>number of guesses: {this.state.numberOfGuesses}</p>
			<button onClick={this.__startGame}>Restart</button>
		</div>
		);
	}
}
 

export default HumanGuess;