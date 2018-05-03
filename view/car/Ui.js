import React , { Component } from 'react'
import { View , Text , Image,TouchableOpacity } from 'react-native'
import {PullView} from 'react-native-pull'
import styles from './style.js'

const bag = require('../../resource/imgs/bag.png')

export default class Car extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}
	componentDidMount(){

	}

	render(){
		return (
			<View style={styles.wrap}>
				<View style={styles.header}>
					<Text style={styles.title}>购物车</Text>
				</View>
				<View style={styles.login}>
					<Image source={bag} style={styles.baglogo} />
					<Text style={styles.warning}>您还没登录呢, 请先登录哦~</Text>
					
				<TouchableOpacity 
					style={styles.loginwrap}
					onPress={() => this.props.SignIn()}
				>
					<Text style={styles.logintxt}>立即登录</Text>
				</TouchableOpacity>
				</View>
			</View>
			
		)
	}
} 

	