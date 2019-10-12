import React from 'react';
import {connect} from "react-redux";

// App으로부터 players를 받아서 totalPlayers, totalScore 계산
const Stats = (props) => {
	let totalPlayers = props.players.length;
	let totalScore = 0;
	props.players.forEach(player=> {
		totalScore += player.score;
	})

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalScore}</td>
			</tr>
			</tbody>
		</table>
	);
}

// 부모가 자식한테
// store의 state를 props 매핑
const mapStateToProps = (state) => ({
	// 왼쪽은 props, 오른쪽은 store state
	players: state.playerReducer.players,
})

export default connect(mapStateToProps)(Stats);
