import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Player} from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component{
	render() {
		return (
			<div className="scoreboard">
				<Header title="My Scoreboard" players={this.props.players}/>

				{
					this.props.players.map(player => {
						return (
							<Player name={player.name} score={player.score} id={player.id} key={player.id}
											removePlayer={this.handleRemovePlayer}
											changeScore={this.handleChangeScore} />
						)
					})
				}

				<AddPlayerForm />
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

	/*handleAddPlayer = (name) => {
		console.log('handleAddPlayer: ', name);

		this.setState(prevState => {
			const players = [...prevState.players];
			players.push({name, id: ++this.maxId, score: 0});
			return { players }
		});
	}*/
}

// 액션을 디스패치하는 펑션을 props 매핑
const mapStateToProps = (state) => ({
	// 왼쪽은 props, 오른쪽은 store state
	players: state.playerReducer.players,
})

export default connect(mapStateToProps)(App);
