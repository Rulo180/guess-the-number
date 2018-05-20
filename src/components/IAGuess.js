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
            <div className="row">
                <div className="col">
                    {this.state.success?
                        <div className="alert alert-success">Lo logre!!</div>
                        :
                        <div className="alert alert-info">My guess is: {this.state.guessNumber}</div>
                    }
                    <div class="btn-group" role="group">
                        <button onClick={this.__handleClick.bind(this, 'lt')} type="button" class="btn btn-secondary">-</button>
                        <button onClick={this.__handleClick.bind(this, 'eq')} type="button" class="btn btn-secondary">=</button>
                        <button onClick={this.__handleClick.bind(this, 'gt')} type="button" class="btn btn-secondary">+</button>
                    </div>
                    <p>lower: {this.state.lowerLimit}</p>
                    <p>higher: {this.state.upperLimit}</p>
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
         )
    }
}
 

export default IAGuess;