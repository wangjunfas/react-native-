import { getClassList1 ,getClassList2} from './actionTypes'

export const getclassList1 = () => {
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/common/getOneLevelCategory?&mark=ios&sign=fc24e5795bff39e3c71d0e0c0a979873&version=3.5.2')
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:getClassList1,
				value:res.list
			})
		})
	}
}

export const getclassList2 = (id) => {
	var key = id == null ? '554dad6ae4b0a4e489d1af2f' : id
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/common/getTowLevelCategory?&mark=ios&parentId=' + key + '&sign=bab17c1a879d76672ac46bfc6ff399e0&version=3.5.2')
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:getClassList2,
				value:res.list
			})
		})
	}
}

