import React, { Component } from 'react';

class HumanGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      secretNumber: null,
      guessNumber: '',
      remainingGuesses: 0,
      success: false,
    };
    this.__handleChange = this.__handleChange.bind(this);
    this.__makeGuess = this.__makeGuess.bind(this);
    this.__startGame = this.__startGame.bind(this);
  }
  componentDidMount() {
    this.__startGame();
  }
  /**
   * Reset state values
   */
  __startGame() {
    this.setState({
      secretNumber: Math.floor((Math.random() * 100) + 1),
      message: 'Well, I am thinking of a number between 1 and 100.',
      guessNumber: '',
      remainingGuesses: 10,
      success: false,
    });
  }
  __makeGuess() {
    let { remainingGuesses, message, success } = this.state;
    const { secretNumber, guessNumber } = this.state;
    if (!success) {
      if (remainingGuesses > 1) {
        if (secretNumber > guessNumber) {
          message = `The secret number is higher than ${guessNumber}.`;
        } else if (secretNumber < guessNumber) {
          message = `The secret number is lower than ${guessNumber}.`;
        } else if (secretNumber === parseInt(guessNumber)) {
          message = `You guess it, the secret number is ${guessNumber}.`;
          success = true;
        } else {
          message = 'error';
        }
        remainingGuesses--;
      } else if (remainingGuesses === 1) {
        // Last chance
        if (secretNumber === parseInt(guessNumber)) {
          message = `You guess it, the secret number is ${guessNumber}.`;
          success = true;
        } else {
          message = `Nop. The secret number was ${secretNumber}`;
        }
        remainingGuesses--;
      }
      this.setState({
        message,
        remainingGuesses,
        success,
      });
    }
  }
  __handleChange(event) {
    const { value } = event.target;
    if (!value || (value > 0 && value <= 100)) {
      this.setState({
        guessNumber: value,
      });
    }
  }
  render() {
    return (
      <div className="human-guess row shadow">
        <div className="col col-md-9">
          <p className={`human-guess__message alert ${this.state.success?'alert-success':'alert-info'}`}>
            {this.state.message}
          </p>
          <div className="form-group">
            <label htmlFor="guessInput">Make a guess:</label>
            <div className="input-group">
              <input
                value={this.state.guessNumber}
                onChange={this.__handleChange}
                type="number"
                className="human-guess__input form-control"
                id="guessInput"
                min="0"
                max="100"
              />
              <div className="input-group-append">
                <button
                  onClick={this.__makeGuess}
                  className="btn btn-primary"
                  id="makeGuessBtn"
                >
                  Let's try!
                </button>
              </div>
            </div>
            <small>Remaining guesses: {this.state.remainingGuesses}</small>
          </div>
        </div>
        <aside className="col-md-3 text-center">
          <button
            onClick={this.__startGame}
            className="btn btn-danger"
            id="restartBtn"
          >
            Restart
          </button>
        </aside>
      </div>
    );
  }
}

export default HumanGuess;
