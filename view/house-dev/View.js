import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getdevList } from './actionCreator'

import HouseDEV from './Ui'

const mapState = (state) => {
	return {
		devlist:[
		state.housedev.devlist1,
		state.housedev.devlist2,
		state.housedev.devlist3,
		state.housedev.devlist4,
		state.housedev.devlist5,
		state.housedev.devlist6,
		state.housedev.devlist7,
		state.housedev.devlist8]
	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
		renderdev(id,sign,index) {
			const action = getdevList(id,sign,index)
			dispatch(action)
		},
	}
}

export default connect(mapState, mapDispatch)(HouseDEV)
