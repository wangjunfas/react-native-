import React , { Component } from 'react'
import { View ,Text,Image} from 'react-native'
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import styles from './style.js'

import { View as Classclass } from '../class-class/'
import { View as Classfunc } from '../class-func/'

export default class Class extends Component {
	constructor(props){
		super(props)
		this.state={
			 
		}
	}

	render(){
		const search = require('../../resource/imgs/search2.png')

		return (
			<View style={styles.wrap}>
				<View style={styles.header}>
						<View style={styles.search}>
							<Image source={search} style={styles.searchlogo} />
							<Text style={styles.searchtxt}>搜索品牌/商品</Text>}
						</View>
				</View>
				
				<ScrollableTabView
	                renderTabBar={() => <DefaultTabBar />}
	                initialPage={0}
	                tabBarBackgroundColor='#ff666b'
			        tabBarUnderlineStyle={styles.line}
			        tabBarActiveTextColor='#fff'
			        tabBarInactiveTextColor='#ffb3b5'
			        tabBarTextStyle={{fontSize: 14,fontWeight:'200'}}
	                >
	                <Classclass tabLabel='分类' />
	                <Text tabLabel='品牌'></Text>
	                <Classfunc tabLabel='功效' />
           		</ScrollableTabView>
			</View>	
		)
	}
} 