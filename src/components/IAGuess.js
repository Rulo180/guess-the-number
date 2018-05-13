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
            <div>
                <p>My guess is: {this.state.guessNumber}</p>
                <button onClick={this.__handleClick.bind(this, 'lt')}>&lt;</button>
                <button onClick={this.__handleClick.bind(this, 'eq')}>=</button>
                <button onClick={this.__handleClick.bind(this, 'gt')}>&gt;</button>
                <br/>
                <span>lower: {this.state.lowerLimit}</span>
                <span>higher: {this.state.higherLimit}</span>
            </div>
         )
    }
}
 

export default IAGuess;