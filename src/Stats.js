import React from 'react';

// App으로부터 players를 받아서 totalPlayers, totalScore 계산
export const Stats = (props) => {
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