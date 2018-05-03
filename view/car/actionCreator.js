import { getSquList } from './actionTypes'

export const getsqulist = () => {
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/community/squareArticleList?&mark=ios&max=10&offset=0&sign=dda9650745f5800f2cfefbde3cfbe0b3&version=3.5.2')
		.then(res => res.json())
		.then((res) => {
			console.log(res.model)
			dispatch({
				type:getSquList,
				value:res.model
			})
		})
	}
}

