
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {  getStackList } from './actionCreator'

import House from './Ui'

const mapState = (state) => {
	return {
		stacklist: state.house.stacklist,
	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
		renderstack() {
			const action = getStackList()
			dispatch(action)
		},
	}
}

export default connect(mapState, mapDispatch)(House)
