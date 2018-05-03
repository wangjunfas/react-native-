import { getClassList1,getClassList2 } from './actionTypes'

const defaultState = {
	classlist1: [],
	classlist2:[]
}

export default (state = defaultState, action) => {
	switch(action.type){
		case getClassList1:
			return Object.assign({}, state, {
				classlist1: action.value
			})
		case getClassList2:
		return Object.assign({}, state, {
			classlist2: action.value
		})
		default:
			return state
	}
}