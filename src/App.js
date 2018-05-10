import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'You have to make a guess, bro!',
			secretNumber: null,
			guessNumber: '',
			numberOfGuesses: 0,
		};
		this.__handleChange = this.__handleChange.bind(this);
		this.__makeGuess = this.__makeGuess.bind(this);
		this.__restart = this.__restart.bind(this);
	}
	componentDidMount() {
		this.setState({
			secretNumber: Math.floor(Math.random() * 100 + 1),
		});
	}
	__restart() {
		this.setState({
			secretNumber: Math.floor(Math.random() * 100 + 1),
			message: 'You have to make a guess, bro!',
			guessNumber: null,
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
		<div className="App">
			<h1>Guess the Number - The Game</h1>
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
			<br />
			<span>{this.state.message}</span>
			<br />
			<span>secret number: {this.state.secretNumber}</span>
			<br />
			<span>guess: {this.state.guessNumber}</span>
			<br />
			<span>number of guesses: {this.state.numberOfGuesses}</span>
			<br />
			<button onClick={this.__restart}>Restart</button>
		</div>
		);
	}
}

export default App;
