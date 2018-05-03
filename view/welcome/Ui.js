import React , { Component } from 'react'
import { View ,Text,Image,ScrollView,Animated,ImageBackground} from 'react-native'
import styles from './style.js'

const welcomebg = require('../../resource/imgs/welcomebg.png')
const welcomelogo = require('../../resource/imgs/welcomelogo.png')

export default class Welcome extends Component {
	constructor(props){
		super(props)
		this.state={
			totop:new Animated.Value(350),
			changewidth:new Animated.Value(0)
		}
	}
	totop(){
		Animated.timing( 
      	  	this.state.totop, 
      	  	{
	            toValue: 280,
	            duration:3000
			}).start()
	}
	changewidth(){
		Animated.timing( 
      	  	this.state.changewidth, 
      	  	{
	            toValue: 230,
	            duration:1500
			}).start()
	}
	componentDidMount(){
		setTimeout(() => {
			this.totop()
			setTimeout(() => {
				this.changewidth()
				setTimeout(() => {
					this.props.navigation.navigate('Home')
				},3000)
			},3000)
		},3000)
		// ,{width:this.state.changewidth}
		// ,{top: this.state.totop}
	}
	render(){
		return (
				<ImageBackground source={welcomebg} style={styles.container}>
					<Animated.View style={[styles.welcomego,{top: this.state.totop}]}>
						<Image source={welcomelogo} style={styles.welcomelogo}/>
					</Animated.View>
					<Animated.View style={[styles.welcomeview,{width:this.state.changewidth}]}>
						<Text style={styles.welcometxt}>让 商 品 可 信 赖      让 美 丽 更 简 单</Text>
					</Animated.View>
				</ImageBackground>
		)
	}
} 
