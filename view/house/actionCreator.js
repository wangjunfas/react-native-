import { StackList } from './actionTypes'

export const getStackList = () => {
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/index/getIndexNavigator?&mark=ios&sign=fc24e5795bff39e3c71d0e0c0a979873&version=3.5.2')
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:StackList,
				value:res.model
			})
		})
	}
}