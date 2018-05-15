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
      message: 'Well, I am thinking of a number between 1 and 100.',
			guessNumber: '',
			numberOfGuesses: 0,
		})
	}
	__makeGuess() {
		let { secretNumber, guessNumber, numberOfGuesses } = this.state,
		message = '';
			message = `The secret number is higher than ${guessNumber}.`;
		} else if (secretNumber < guessNumber) {
			message = `The secret number is lower than ${guessNumber}.`;
			message = `You guess it, the secret number is ${guessNumber}.`
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
      <div className="row">
        <div className="col col-md-9">
			<p className="alert alert-info">{this.state.message}</p>
          	<div class="form-group">
            	<label for="guessInput">Make a guess:</label>
            	<div class="input-group">
			<input
				value={this.state.guessNumber}
				onChange={this.__handleChange}
				type="number"
					className="form-control"
					id="guessInput"
				min="0"
				max="100"
			/>
					<div class="input-group-append">
						<button onClick={this.__makeGuess} className="btn btn-primary">
						Let's try!
						</button>
					</div>
				</div>
          	</div>
			<p>secret number: {this.state.secretNumber}</p>
			<p>guess: {this.state.guessNumber}</p>
			<p>number of guesses: {this.state.numberOfGuesses}</p>
        </div>
        <aside className="col-md-3">
          <button onClick={this.__startGame} className="btn btn-danger">
            Restart
          </button>
        </aside>
		</div>
		);
	}
}
 

export default HumanGuess;