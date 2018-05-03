//容器组件，将仓库的值，以及改变仓库值的方法传给ui组件，组件通过this.props可以拿到值与方法
import React from 'react'
import { connect } from 'react-redux'
import  Home from './Ui' 
import { changetabname } from './actionCreator'

const  mapState = (state) => ({  
	TabName:state.home.TabName  //在ui组件中我们将通过这个值来判断点击的是哪一个tab
})

const mapDispatch = (dispatch) => ({  //return了一个对象，对象里面写方法
	ChangeTabName(type){   //改变tabname的方法
		const action = changetabname(type)
		dispatch(action)
	}
})

export default connect(mapState,mapDispatch)(Home)