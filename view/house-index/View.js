
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getBannerList , getactivitylist , getbrandlist ,getgoodslist,loadgoodslist} from './actionCreator'

import Houseindex from './Ui'

const mapState = (state) => {
	return {
		bannerlist: state.houseindex.bannerlist,
		activitylist:state.houseindex.activitylist,
		brandlist:state.houseindex.brandlist,
		goodslist:state.houseindex.goodslist,
		isfinish:state.houseindex.isfinish,
		page:state.houseindex.page
	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
		renderbanner() {
			const action = getBannerList()
			dispatch(action)
		},
		renderactivity(){
			const action = getactivitylist()
			dispatch(action)
		},
		renderbrand(){
			const action = getbrandlist()
			dispatch(action)
		},
		rendergoods(){
			const action = getgoodslist()
			dispatch(action)
		},
		loadgoods(page){
			const action = loadgoodslist(page)
			dispatch(action)
		}		
	}
}

export default connect(mapState, mapDispatch)(Houseindex)
