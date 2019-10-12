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
	switch (action.type) {
		case 'ADD_PLAYER':
			console.log('addPlayer');
			const players = [...state.players];
			players.push({name: action.name, id: ++maxId, score: 0});
			return { players: players }
	}

	return state;
}