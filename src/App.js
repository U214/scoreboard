import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Player} from "./Player";

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
