import React , { Component } from 'react'
import { View ,Text,Image,ScrollView,TouchableWithoutFeedback} from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import styles from './style.js'

const hf = require('../../resource/imgs/hf.png')
const hf2 = require('../../resource/imgs/hf2.png')
const cz = require('../../resource/imgs/cz.png')
const cz2 = require('../../resource/imgs/cz2.png')
const rh = require('../../resource/imgs/rh.png')
const rh2 = require('../../resource/imgs/rh2.png')
const st = require('../../resource/imgs/st.png')
const st2 = require('../../resource/imgs/st2.png')
const hz = require('../../resource/imgs/hz.png')
const hz2 = require('../../resource/imgs/hz2.png')
const xs = require('../../resource/imgs/xs.png')
const xs2 = require('../../resource/imgs/xs2.png')
const jk = require('../../resource/imgs/jk.png')
const jk2 = require('../../resource/imgs/jk2.png')


export default class Classclass extends Component {
	constructor(props){
		super(props)
		this.state={
			 isSelected:'护肤',
			 beforeimg:[hf,cz,rh,st,hz,xs,jk],
			 afterimg:[hf2,cz2,rh2,st2,hz2,xs2,jk2]
		}
	}
	componentDidMount(){
		this.props.renderclass1()
		this.props.renderclass2()
	}
	changeSelect(itemname,itemid){
		this.setState({
			isSelected:itemname
		})
		this.props.renderclass2(itemid)
	}
	render(){
		const search = require('../../resource/imgs/search2.png')

		return (
			<View style={styles.wrap}>	
				<View style={styles.first}>
					{
						this.props.classlist1.map((item,index) => {
							var selectitemStyle = item.name == this.state.isSelected ? styles.firstitem2 : styles.firstitem
							var selecttxtStyle = item.name == this.state.isSelected ? styles.firsttxt2 : styles.firsttxt
							var img = item.name == this.state.isSelected ? this.state.afterimg[index] : this.state.beforeimg[index]
							return(
								<TouchableWithoutFeedback key={item.id} onPress={() => this.changeSelect(item.name,item.id)}>
									<View style={selectitemStyle} >
										<Image source={img} style={{width:18,height:18,marginLeft:'20%',}}/>
										<Text style={selecttxtStyle}>{item.name}</Text>
									</View>
								</TouchableWithoutFeedback>
							)
						})
					}
				</View>
				<ScrollView 
					contentContainerStyle={styles.second} 
					bounces={false}
					showsVerticalScrollIndicator={false}
				>
					{
						this.props.classlist2.map((item,index) => {	
							return(
								<View style={styles.seconditem} key={item.id}>
									<Text style={styles.secondtxt}>{item.name}</Text>
								</View>
							)
						})
					}
					
				</ScrollView>
			</View>
		)
	}
} 