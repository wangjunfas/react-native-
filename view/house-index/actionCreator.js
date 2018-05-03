import { changeBannerType , changeActivityType ,changeBrandType ,changeGoodsType,loadGoodsType} from './actionTypes'

export const getBannerList = () => {
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/appBanner/list?&mark=ios&sign=fc24e5795bff39e3c71d0e0c0a979873&version=3.5.2')
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:changeBannerType,
				value:res.list
			})
		})
	}
}

export const getactivitylist = () =>{
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/appMenu/list?&mark=ios&sign=fc24e5795bff39e3c71d0e0c0a979873&version=3.5.2')
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:changeActivityType,
				value:res.list
			})
		})
	}
}

export const getbrandlist = () =>{
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/index/getSourceAdv?&mark=ios&sign=fc24e5795bff39e3c71d0e0c0a979873&version=3.5.2')
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:changeBrandType,
				value:res.data
			})
		})
	}
}

export const getgoodslist = () =>{
	return (dispatch) => {
		fetch('https://api.lizi.com/0.7/common/recItems?&cartId=&mark=ios&page=1&sign=fc24e5795bff39e3c71d0e0c0a979873&version=3.5.2')
		.then(res => res.json())
		.then((res) => {
			dispatch({
				type:changeGoodsType,
				value:res.data,
				judge:false,
				page:1
			})
		})
	}
}

export const loadgoodslist = (page) =>{
	++page
	return (dispatch) => {
		fetch(`https://api.lizi.com/0.7/common/recItems?&cartId=&mark=ios&page=${page}&sign=fc24e5795bff39e3c71d0e0c0a979873&version=3.5.2`)
		.then(res => res.json())
		.then((res) => {
			if (res.data != '') {
				dispatch({
					type:loadGoodsType,
					value:res.data,
					judge:false,
					page:page
				})
			}else{
				dispatch({
					type:loadGoodsType,
					value:res.data,
					judge:true,
					page:page
				})
			}
			
		})
	}
}

