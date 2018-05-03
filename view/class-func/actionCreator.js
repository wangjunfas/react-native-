import { getFuncList } from './actionTypes'

export const getfuncList = () => {
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/common/getFunction?')
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:getFuncList,
				value:res.list
			})
		})
	}
}

