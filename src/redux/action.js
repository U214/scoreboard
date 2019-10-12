// action creator
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "./actionTypes";
//type만 필수 나머지는 자유

export const addPlayer = (name) => ({
	type: ADD_PLAYER,
	name
})

export const removePlayer = (id) => ({
	type: REMOVE_PLAYER,
	id
})

export const changeScore = (id, delta) => ({
	type: CHANGE_SCORE,
	id,
	delta
})

