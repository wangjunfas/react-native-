import { getFuncList } from './actionTypes'

const defaultState = {
	funclist: [],

}

export default (state = defaultState, action) => {
	switch(action.type){
		case getFuncList:
			return Object.assign({}, state, {
				funclist: action.value
			})
		default:
			return state
	}
}