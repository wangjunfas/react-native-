//将各个组件中的reducer全部引入，绑成一个reducer，方便管理

import { combineReducers } from 'redux'

import { reducer as home } from '../view/home/'
import { reducer as house } from '../view/house/'
import { reducer as houseindex } from '../view/house-index/'
import { reducer as housedev } from '../view/house-dev/'
import { reducer as classclass } from '../view/class-class/'
import { reducer as classfunc } from '../view/class-func/'
import { reducer as friendsqu } from '../view/friend-square/'


const reducer = combineReducers({
	home,
	house,
	houseindex,
	classclass,
	classfunc,
	friendsqu,
	housedev
})

export default reducer