import React , { Component } from 'react'
import { View ,Text,Image,ScrollView,Animated ,Easing} from 'react-native'
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import styles from './style.js'

import { View as Friendsquare } from '../friend-square/'
import { View as Friendconcern } from '../friend-concern/'

const love = require('../../resource/imgs/love.png')


export default class Friend extends Component {
	constructor(props){
		super(props)
		this.state={
			headertop:new Animated.Value(0)
		}
	}
 
	changetop(value){
		Animated.timing(                          
	      this.state.headertop,                  
	      {
	        toValue: value,   
	        easing:Easing.linear,                    
	        duration:200
	      }
	    ).start();
	}
	render(){

		return (
			<View style={styles.wrap}>
				<Animated.View style={[styles.header,{marginTop:this.state.headertop}]}>
					<Text style={styles.title}>丽子圈</Text>
					<Image source={love} style={styles.lovelogo}></Image>
				</Animated.View>
				<ScrollableTabView
					style={{height:20}}
	                renderTabBar={() => <DefaultTabBar />}
	                initialPage={0}
	                tabBarBackgroundColor='#ff666b'
			        tabBarUnderlineStyle={styles.line}
			        tabBarActiveTextColor='#fff'
			        tabBarInactiveTextColor='#ffb3b5'
			        tabBarTextStyle={{fontSize: 14,marginTop:25}}
	                >
	                <Friendsquare tabLabel='广场' changeTop={(value) => this.changetop(value)} />
	                <Friendconcern tabLabel='关注' SignIn={() => this.props.SignIn()}/>
           		</ScrollableTabView>
			</View>
		)
	}
} 