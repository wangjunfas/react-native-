//此配置用于实现页面的切换功能，以及store的传递

import React from 'react'  //引入react
import { StackNavigator } from 'react-navigation' //多页面切换功能，(包含三个组件DrawerNavigator，TabNavigator，StackNavigator)
import { Provider } from 'react-redux'  //传递store
import store from './store/'  //引入仓库
import {YellowBox} from 'react-native'  //引入仓库

import { View as Home  } from './view/home/'
import { View as Welcome  } from './view/welcome/'

YellowBox.ignoreWarnings([  //去除黄盒子报错问题
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Module RCTImageLoader requires',
]);

const RouteApp = StackNavigator({
	Welcome:{ screen: Welcome , navigationOptions:{
    	header:null,
    	gesturesEnabled:false
  	} },
  	Home:{ screen: Home , navigationOptions:{
    	header:null,
    	gesturesEnabled:false
  	} }
})


const App = (props) => {
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  )
}

export default App