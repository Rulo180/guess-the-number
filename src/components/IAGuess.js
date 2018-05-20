import React, { Component } from 'react';

class IAGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessNumber: '',
      lowerLimit: 1,
      upperLimit: 100,
      success: false,
    };
    this.__makeGuess = this.__makeGuess.bind(this);
    this.__startGame = this.__startGame.bind(this);
  }
  componentDidMount() {
    this.__startGame();
  }
  __startGame() {
    this.setState({
      guessNumber: Math.floor((Math.random() * 100) + 1),
      lowerLimit: 0,
      upperLimit: 100,
      success: false,
    });
  }
  __handleClick(option) {
    let { lowerLimit, upperLimit, success } = this.state;
    const { guessNumber } = this.state;
    switch (option) {
      case 'lt':
        upperLimit = guessNumber;
        break;
      case 'gt':
        lowerLimit = guessNumber;
        break;
      case 'eq':
        success = true;
        break;
      default:
        break;
    }
    this.setState({
      lowerLimit,
      upperLimit,
      success,
    });
    this.__makeGuess(lowerLimit, upperLimit);
  }
  __makeGuess(min, max) {
    this.setState({
      guessNumber: Math.round((Math.random() * (max - min - 1)) + min + 1),
    });
  }
  render() {
    return (
      <div className="ia-guess row shadow">
        <div className="col col-md-9">
          {this.state.success ? (
            <div className="alert alert-success">
              I knew it! Do you want to restart the game?
            </div>
          ) : (
            <div className="alert alert-info">
              My guess is: {this.state.guessNumber}
            </div>
          )}
          <label className="d-block">Your secret number is...</label>
          <div className="btn-group btn-group-lg" role="group">
            <button
              onClick={this.__handleClick.bind(this, 'lt')}
              type="button"
              className="btn btn-secondary"
              id="ltBtn"
            >
              -
            </button>
            <button
              onClick={this.__handleClick.bind(this, 'eq')}
              type="button"
              className="btn btn-secondary"
              id="eqBtn"
            >
              =
            </button>
            <button
              onClick={this.__handleClick.bind(this, 'gt')}
              type="button"
              className="btn btn-secondary"
              id="gtBtn"
            >
              +
            </button>
          </div>
        </div>
        <aside className="col col-md-3 text-center">
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

export default IAGuess;
