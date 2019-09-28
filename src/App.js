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
				<Header title="My Scoreboard" players={this.state.players}/>

				{
					this.state.players.map(player => {
						return (
							<Player name={player.name} score={player.score} id={player.id} key={player.id}
											removePlayer={this.handleRemovePlayer}
											changeScore={this.handleChangeScore} />
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

	handleChangeScore = (id, delta) => {
		console.log('handleChangeScore: ', id, delta);

		this.setState(prevState => {
/*
			const player = prevState.players.find(player => player.id === id);
			player.score += delta;
			return {
				// 안의 내용까지 보지않고 객체 주소만 보고 바꼈는지 안바꼈는지 판별(불변)
				// player: prevState -> 주소는 이전과 동일하기 때문에 변화가 일어났는지 모르게 됨
				players: [...prevState.players] // 새로운 객체에 담아서 변화를 알려준다
			}
*/
			return {player: prevState.players.map(player => {
					if (player.id === id) {
						player.score += delta;
					}

					return player;
				})
			}
		})
	}
}

export default App;
