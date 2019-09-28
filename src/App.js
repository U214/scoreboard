import React from 'react';
import './App.css';
import {Header} from "./Header";

const Player = (props) => (
	<div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => props.removePlayer(props.id) }> X </button>
			{props.name}
		</span>
		<Counter score={props.score}/>
	</div>
);

class Counter extends React.Component {
	state = {
		score: 30,
	}

	//arrow function 형태인 경우 this가 lexical this가 되서 바인딩이 필요없음
	increment = () => {
		this.setState(prevState => ({
			score: prevState.score + 1
		}));
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"> -</button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}> +</button>
			</div>
		)
	}
}

class App extends React.Component{
	state = {
		players: [
			{name: 'rina1', score: 30, id: 1},
			{name: 'rina2', score: 40, id: 2},
			{name: 'rina3', score: 50, id: 3},
			{name: 'rina4', score: 60, id: 4},
		]
	}

	render() {
		return (
			<div className="scoreboard">
				<Header title="My Scoreboard" totalPlayers={11}/>

				{
					this.state.players.map(player => {
						return (
							<Player name={player.name} score={player.score} id={player.id} key={player.id}
											removePlayer={this.handleRemovePlayer}/>
						)
					})
				}
			</div>
		)
	}

	handleRemovePlayer = (id) => {
		console.log('handlRemovePlayer: ' + id);

		this.setState(prevState => ({
			players: prevState.players.filter(player => player.id !== id)
		}));
	}
}

export default App;
