import { 
	getDevList1,
	getDevList2,
	getDevList3,
	getDevList4,
	getDevList5,
	getDevList6,
	getDevList7,
	getDevList8 } from './actionTypes'

const defaultState = {
	devlist1: [],
	devlist2: [],
	devlist3: [],
	devlist4: [],
	devlist5: [],
	devlist6: [],
	devlist7: [],
	devlist8: [],
}

export default (state = defaultState, action) => {
	switch(action.type){
		case getDevList1:
			return Object.assign({}, state, {
				devlist1: action.value
			})
		case getDevList2:
			return Object.assign({}, state, {
				devlist2: action.value
			})
		case getDevList3:
			return Object.assign({}, state, {
				devlist3: action.value
			})
		case getDevList4:
			return Object.assign({}, state, {
				devlist4: action.value
			})
		case getDevList5:
			return Object.assign({}, state, {
				devlist5: action.value
			})
		case getDevList6:
			return Object.assign({}, state, {
				devlist6: action.value
			})
		case getDevList7:
			return Object.assign({}, state, {
				devlist7: action.value
			})
		case getDevList8:
			return Object.assign({}, state, {
				devlist8: action.value
			})
		default:
			return state
	}
}