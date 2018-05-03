import React , { Component } from 'react'
import { View ,Text,Image,ScrollView,Dimensions,TouchableWithoutFeedback,TouchableOpacity} from 'react-native'
import {PullView} from 'react-native-pull'
import { LinearGradient } from 'expo';
import styles from './style.js'

const itemWidth = (Dimensions.get('window').width - 2) / 3;
const itemHeight = itemWidth * 300 / 411

const setting = require('../../resource/imgs/setting.png')
const signin = require('../../resource/imgs/signin.png')
const fk = require('../../resource/imgs/fk.png')
const fh = require('../../resource/imgs/fh.png')
const sh = require('../../resource/imgs/sh.png')
const pj = require('../../resource/imgs/pj.png')
const tk = require('../../resource/imgs/tk.png')
const one = require('../../resource/imgs/one.png')
const two = require('../../resource/imgs/two.png')
const three = require('../../resource/imgs/three.png')
const four = require('../../resource/imgs/four.png')
const five = require('../../resource/imgs/five.png')
const six = require('../../resource/imgs/six.png')
const seven = require('../../resource/imgs/seven.png')
const eight = require('../../resource/imgs/eight.png')
const nine = require('../../resource/imgs/nine.png')

export default class Mine extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}
	render(){
		return (
            <ScrollView style={styles.container}>
            	<LinearGradient  
            		style={styles.wrap}
            		colors={['#4c669f', '#dd9632','#d97074','#bd70d9']} 
            		start={[0.1,0.6]} end={[0,1]}
            	>
            		<View style={styles.cover}></View>
                	<Image source={setting} style={styles.setting} />
                	<TouchableOpacity 
						onPress={() => this.props.SignIn()}
                	>
                		<Image source={signin} style={styles.signin}/>
                	</TouchableOpacity>
                	<Text style={styles.signintxt}>点击登录账户</Text>
				</LinearGradient>           
				<View style={styles.progress}>
					<View style={styles.proitem} >
						<Image source={fk} style={styles.proimg} />
						<Text style={styles.protxt}>待付款</Text>
					</View>
					<View style={styles.proitem}>
						<Image source={fh} style={styles.proimg} />
						<Text style={styles.protxt}>待发货</Text>
					</View>
					<View style={styles.proitem}>
						<Image source={sh} style={styles.proimg} />
						<Text style={styles.protxt}>待收货</Text>
					</View>
					<View style={styles.proitem}>
						<Image source={pj} style={styles.proimg} />
						<Text style={styles.protxt}>待评价</Text>
					</View>
					<View style={styles.proitem}>
						<Image source={tk} style={styles.proimg} />
						<Text style={styles.protxt}>退款/售后</Text>
					</View>
				</View> 
				<View style={styles.funcwrap}>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={one} />
							<Text style={styles.functxt}>我的收藏</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={two} />
							<Text style={styles.functxt}>我的优惠券</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={three} />
							<Text style={styles.functxt}>我的足迹</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={four} />
							<Text style={styles.functxt}>我的消息</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={five} />
							<Text style={styles.functxt}>邀请新用户</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={six} />
							<Text style={styles.functxt}>我的地址</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={seven} />
							<Text style={styles.functxt}>意见反馈</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={eight} />
							<Text style={styles.functxt}>常见购物问题</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={() => {}}>
						<View style={[styles.funcitem,{width:itemWidth,height:itemHeight}]}>
							<Image style={styles.funcimg} source={nine} />
							<Text style={styles.functxt}>联系平台</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
            </ScrollView>

		)
	}
} 
