import React , { Component } from 'react'
import { View , Text , Image,TouchableOpacity } from 'react-native'
import styles from './style.js'


const login = require('../../resource/imgs/login.png')


export default class Friendconcern extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}
	render(){
		return (
			<View style={styles.wrap}>
				<Image source={login} style={styles.loginlogo}/>
				<TouchableOpacity 
					style={styles.login}
					onPress={() => this.props.SignIn()}
				>
					<Text style={styles.logintxt}>去登录</Text>
				</TouchableOpacity>
			</View>
		)
	}
} 



	