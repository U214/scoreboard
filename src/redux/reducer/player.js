import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

const playerInitialState = {
	players: [
		{name: 'rina1', score: 30, id: 1},
		{name: 'rina2', score: 40, id: 2},
		{name: 'rina3', score: 50, id: 3},
		{name: 'rina4', score: 60, id: 4},
	]
}

let maxId = 4;

export const playerReducer = (state = playerInitialState, action) => {
	let players;

	switch (action.type) {
		case ADD_PLAYER:
			console.log('addPlayer');
			players = [...state.players];
			players.push({name: action.name, id: ++maxId, score: 0});
			return {players}

		case REMOVE_PLAYER:
			console.log('removePlayer');
			players = state.players.filter(player => player.id !== action.id);
			return {players}

		case CHANGE_SCORE:
			console.log('changeScore');
			players = [ ...state.players ];
			const player = players.find(player => player.id === action.id);
			player.score += action.delta;
					return {players}
	}

	return state;
}