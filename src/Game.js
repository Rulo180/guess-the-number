import React, { Component } from 'react';
import HumanGuess from './components/HumanGuess';
import IAGuess from './components/IAGuess';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'human',
    };
  }
  __selectMode(mode) {
    this.setState({
      mode,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="game">
          <header>
            <h1 className="game__title">Guess the Number</h1>
          </header>
          <div className="row justify-content-center">
            <div className="game__mode-btns btn-group shadow" role="group">
              <button
                onClick={this.__selectMode.bind(this, "human")}
                type="button"
                className="game__mode-btn btn btn-secondary"
                id="humanModeBtn"
              >
                Human
              </button>
              <button
                onClick={this.__selectMode.bind(this, "ia")}
                type="button"
                className="game__mode-btn btn btn-secondary"
                id="iaModeBtn"
              >
                IA
              </button>
            </div>
          </div>
          <main className="row">
            <div className="col">
              {this.state.mode === "human" ? <HumanGuess /> : <IAGuess />}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Game;
