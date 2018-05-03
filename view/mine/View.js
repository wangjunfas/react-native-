import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getfuncList } from './actionCreator'

import Mine from './Ui'

const mapState = (state) => {
	return {
		funclist: state.classfunc.funclist,

	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
		renderfunc() {
			const action = getfuncList()
			dispatch(action)
		},
	}
}

export default connect(null, null)(Mine)
