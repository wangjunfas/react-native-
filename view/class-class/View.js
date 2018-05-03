import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getclassList1 , getclassList2} from './actionCreator'

import Classclass from './Ui'

const mapState = (state) => {
	return {
		classlist1: state.classclass.classlist1,
		classlist2: state.classclass.classlist2
	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
		renderclass1() {
			const action = getclassList1()
			dispatch(action)
		},
		renderclass2(id) {
			const action = getclassList2(id)
			dispatch(action)
		},
	}
}

export default connect(mapState, mapDispatch)(Classclass)
