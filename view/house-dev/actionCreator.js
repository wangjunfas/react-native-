import { 
	getDevList1,
	getDevList2,
	getDevList3,
	getDevList4,
	getDevList5,
	getDevList6,
	getDevList7,
	getDevList8, } from './actionTypes'

export const getdevList = (id,sign,index) => {
	var targettype = null
	switch(index){
		case 0:
			targettype = getDevList1;
			break;
		case 1:
		 	targettype = getDevList2;
		 	break;
		case 2:
		    targettype = getDevList3;
		    break;
		case 3:
		    targettype = getDevList4;
		    break;
		case 4:
		    targettype = getDevList5;
		    break;
		case 5:
		    targettype = getDevList6;
		    break;
		case 6:
		    targettype = getDevList7;
		    break;
		case 7:
		    targettype = getDevList8;
		    break;
	}
	return (dispatch) => {
		fetch(`https://api.lizi.com/0.7/index/getItemDetailList?id=${id}&mark=ios&page=1&sign=${sign}&version=3.5.2`)
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:targettype,
				value:res.data
			})
		})
	}
}

