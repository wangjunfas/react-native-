//该组件的仓库，指明当action.type为不同字符串时，仓库的值会作相应的变化

//actionTypes文件里面放置各种命令字符串，state根据这个而改变
import { tabChange } from './actionTypes'  //按下屏幕下方标签栏时，对应的命令。

//设定state的默认值
const defaultState = {  //因为一个组件可能存在多个需要记录的值，所以用对象来记录
	TabName: 'house'   //这个记录的是按下屏幕下方标签栏时。对应的值。
}

export default (state = defaultState,action) => {
	switch(action.type ){  
		case tabChange:   //按下了屏幕下方标签栏，将改变TabName的值
		return Object.assign({}, state, {   //用assign方法是为了尽量不要去动默认的state值，而是创建一个新的空对象去添加值
					TabName: action.value
				})
		default:
		return state
	}  
}