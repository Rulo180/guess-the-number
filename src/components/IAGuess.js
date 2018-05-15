import React, { Component } from 'react';

class IAGuess extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            guessNumber: '',
            lowerLimit: '1',
            higherLimit: '100',
         }
         this.__makeGuess = this.__makeGuess.bind(this);
    }
    componentDidMount() {
        this.__startGame();
    }
    __startGame() {
        this.setState({
            guessNumber: Math.floor(Math.random() * 100 + 1),
            message: '',
        })
    }
    __handleClick(option) {
        let { guessNumber, lowerLimit, higherLimit } = this.state;
        switch (option){
            case ('lt'):
                higherLimit = guessNumber;
                break;
            case ('gt'):
                lowerLimit = guessNumber;
                break;
            case ('eq'):
                break;
            default:
                return;
        }
        this.setState({
            lowerLimit, 
            higherLimit,
        });
        this.__makeGuess(lowerLimit, higherLimit);
    }
    __makeGuess(min, max) {
        this.setState({
            guessNumber: Math.round((Math.random() * (max - min) + min)),
        })
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
            </div>
         )
    }
}
 

export default IAGuess;