// action creator
import {ADD_PLAYER, REMOVE_PLAYER} from "./actionTypes";

export const addPlayer = (name) => ({
	type: ADD_PLAYER,
	name
})

export const removePlayer = (id) => ({
	type: REMOVE_PLAYER,
	id
})

