import { StackList } from './actionTypes'

const defaultState = {
	stacklist: [],
}

export default (state = defaultState, action) => {
	switch(action.type){
		case StackList:
			return Object.assign({}, state, {
				stacklist: action.value
			})
		default:
			return state
	}
}