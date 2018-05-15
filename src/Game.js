import React, { Component } from "react";
import HumanGuess from './components/HumanGuess';
import IAGuess from './components/IAGuess';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'human',
		}
	}
	__selectMode(mode) {
		this.setState({
			mode: mode
		})
	}
	__toggleSlide() {
		this.setState({
			slide: !(this.state.slide),
		})
	}
	render() { 
        return ( 
			<div className="container">
				<div className="game">
					<header>
						<h1 className="text-center">Guess the Number</h1>
					</header>
					<div class="row justify-content-center">
						<div class="btn-group" role="group">
							<button onClick={this.__selectMode.bind(this, 'human')} type="button" class="btn btn-secondary">Human</button>
							<button onClick={this.__selectMode.bind(this, 'ia')} type="button" class="btn btn-secondary">IA</button>
						</div>
					</div>
					<main className="row">
						<div className="col">
							{(this.state.mode === 'human')?
								<HumanGuess/>
								:
								<IAGuess/>
							}
						</div>
					</main>
					<footer>
						
					</footer>
				</div>
		  	</div>
		 )
    }
}

export default Game;
