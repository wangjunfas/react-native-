import React , { Component } from 'react'
import { View ,Text,Image,ScrollView,TouchableWithoutFeedback} from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import styles from './style.js'

import { View as Lizi } from '../house-index/'
import { View as HouseDEV } from '../house-dev/'

const search = require('../../resource/imgs/search.png')
const totop = require('../../resource/imgs/totop.png')

export default class House extends Component {
	constructor(props){
		super(props)
		this.state={
			 sign:['f37081bb26fd9e80572de29c36f7e77a','f89a90baeb4853cb93716559577c98b3','8aeb6db46a382e3d9dd59d8e5006e99f','35a1d8911eef2b5e3af881baac225a5a','bcd6ebdee8dda51e4d0957c4ba5dba14','b9204f22611e169e9a99c5bfd8234ab5','7dd08e8c9198dffd4c8e63a75e467b89','6ee0cdb7131753e0ed6f6ee918035074&']
		}
	}
	componentDidMount(){
		this.props.renderstack()
	}
	render(){
		return (
			<View style={styles.wrap}>
				<View style={styles.header}>
					<Text style={styles.title}>丽子美妆</Text>
					<Image source={search} style={styles.search}></Image>
				</View>
				
				<ScrollableTabView
	                renderTabBar={() => <ScrollableTabBar />}
	                initialPage={0}
	                tabBarBackgroundColor='#fff'
			        tabBarUnderlineStyle={styles.line}
			        tabBarActiveTextColor='#ff666b'
			        tabBarInactiveTextColor='#000'
			        tabBarTextStyle={{fontSize: 12}}
	                >
	                <Lizi tabLabel='丽子'></Lizi>
	                {
						this.props.stacklist.map((item,index) => {
							return (
								<HouseDEV 
									key={item.id} 
									id={item.id} 
									tabLabel={item.title} 
									sign={this.state.sign[index]}
									index={index}
								/>
							)
						})
					}
           		</ScrollableTabView>
			</View>	
		)
	}
} 

