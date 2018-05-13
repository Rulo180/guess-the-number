import React, { Component } from "react";
import HumanGuess from './components/HumanGuess';
import IAGuess from './components/IAGuess';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() { 
        return ( 
			<div className="App">
				<h1>Guess the Number - The Game</h1>
				<HumanGuess></HumanGuess>
				<hr/>
				<IAGuess></IAGuess>
			</div>
		 )
    }
}

export default App;
