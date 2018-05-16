import React, { Component } from 'react';

class HumanGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      secretNumber: null,
	  guessNumber: '',
	  remainingGuesses: 0,
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
      remainingGuesses: 10,
    });
  }
  __makeGuess() {
    let { secretNumber, guessNumber, remainingGuesses, message } = this.state;
	if (remainingGuesses > 1) {
		if (secretNumber > guessNumber) {
			message = `The secret number is higher than ${guessNumber}.`;
		} else if (secretNumber < guessNumber) {
			message = `The secret number is lower than ${guessNumber}.`;
		} else if (secretNumber === parseInt(guessNumber)) {
			message = `You guess it, the secret number is ${guessNumber}.`
		} else {
			message = 'error';
		}
		remainingGuesses--;	
	} else if (remainingGuesses === 1) {
		(secretNumber === parseInt(guessNumber))?
		message = `You guess it, the secret number is ${guessNumber}.`
		:
		message = `Nop. The secret number was ${secretNumber}`;		
		remainingGuesses--;	
	}
    this.setState({
      	message,
      	remainingGuesses
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
				<small>Remaining guesses: {this.state.remainingGuesses}</small>
          	</div>
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