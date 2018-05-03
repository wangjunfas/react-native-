import { getSquList } from './actionTypes'

const defaultState = {
	squlist: [],
}

export default (state = defaultState, action) => {
	switch(action.type){
		case getSquList:
			return Object.assign({}, state, {
				squlist: action.value
			})
		default:
			return state
	}
}