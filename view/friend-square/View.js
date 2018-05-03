import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getsqulist } from './actionCreator'

import Friendsquare from './Ui'

const mapState = (state) => {
	return {
		squlist: state.friendsqu.squlist,

	}
}

const mapDispatch = (dispatch, ownProps) => {
	return {
		rendersqu() {
			const action = getsqulist()
			dispatch(action)
		},
	}
}

export default connect(mapState, mapDispatch)(Friendsquare)
