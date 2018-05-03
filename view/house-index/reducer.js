import { changeBannerType,changeActivityType,changeBrandType,changeGoodsType,loadGoodsType} from './actionTypes'

const defaultState = {
	bannerlist: [],
	activitylist:[],
	brandlist:[],
	goodslist:[],
	isfinish:false,
	page:1
}

export default (state = defaultState, action) => {
	switch(action.type){
		case changeBannerType:
			return Object.assign({}, state, {
				bannerlist: action.value
			})
		case changeActivityType:
			return Object.assign({}, state, {
				activitylist: action.value
			})
		case changeBrandType:
			return Object.assign({}, state, {
				brandlist: action.value
			})
		case changeGoodsType:
			return Object.assign({}, state, {
				goodslist:action.value,
				isfinish:action.judge,
				page:action.page
			})
		case loadGoodsType:
			return Object.assign({}, state, {
				goodslist:[...state.goodslist,...action.value],
				isfinish:action.judge,
				page:action.page
			})
		default:
			return state
	}
}