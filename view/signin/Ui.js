import React , { Component } from 'react'
import { View ,Text,Image,ScrollView,TouchableWithoutFeedback,Animated,Dimensions,TextInput} from 'react-native'
import styles from './style.js'

const signHeight = Dimensions.get('window').height;

const woman = require('../../resource/imgs/woman.png')
const signleft = require('../../resource/imgs/signleft.png')
const signlogo = require('../../resource/imgs/signlogo.png')
const username = require('../../resource/imgs/username.png')
const password = require('../../resource/imgs/password.png')
const clear = require('../../resource/imgs/clear.png')
const showpass = require('../../resource/imgs/showpass.png')
const hiddenpass = require('../../resource/imgs/hiddenpass.png')
const qq = require('../../resource/imgs/qq.png')
const zfb = require('../../resource/imgs/zfb.png')
const wb = require('../../resource/imgs/wb.png')
const wx = require('../../resource/imgs/wx.png')

export default class Signin extends Component {
	constructor(props){
		super(props)
		this.state={
			animation:new Animated.Value(signHeight),
			showclear:false,
			usernametxt:'',
			ifpassshow:false,
			passwordtxt:'',
			ifsecure:true
		}
	}
	componentDidMount(){
        this.props.onRef(this)
    }
	onpress(){
		Animated.timing( 
      	  	this.state.animation, 
      	  	{
	            toValue: 0,
	            duration:300
			}).start()
	}
	onpressback(){
		Animated.timing( 
      	  	this.state.animation, 
      	  	{
	            toValue: signHeight,
	            duration:300
			}).start()
	}
	clearinput(){
		this.username.clear()
		this.setState({
			usernametxt:''
		})
	}
	touchshowlogo(){
		this.setState({
			ifpassshow:false,
			ifsecure:true
		})
	}
	touchhiddenlogo(){
		this.setState({
			ifpassshow:true,
			ifsecure:false
		})
	}
	render(){
		var clearlogo = this.state.usernametxt != '' ? <TouchableWithoutFeedback onPress={() => this.clearinput()}><Image source={clear} style={styles.clear} /></TouchableWithoutFeedback> : null
		var showpassword = this.state.ifpassshow ? <TouchableWithoutFeedback onPress={() => this.touchshowlogo()}><Image source={showpass} style={styles.passwordshow} /></TouchableWithoutFeedback> : <TouchableWithoutFeedback onPress={() => this.touchhiddenlogo()}><Image source={hiddenpass} style={styles.passwordshow} /></TouchableWithoutFeedback>
		return (
			<Animated.View style={[styles.container,{top:this.state.animation}]}>
            	<Image source={woman} style={styles.women} />
            	<View style={styles.cover}></View>
            	<TouchableWithoutFeedback onPress={() => this.onpressback()}>
            		<Image source={signleft} style={styles.left}/>
            	</TouchableWithoutFeedback>
            	<Image source={signlogo} style={styles.logo}/>
            	<View style={styles.form}>
					<View style={styles.input}>
						<Image source={username} style={styles.inputlogo}/>
						<TextInput
							ref={(ref) => {this.username = ref}}
							selectionColor='#fff'
							style={styles.inputtxt}
							value={this.state.usernametxt}
							onChangeText={(usernametxt) => this.setState({usernametxt})}
						/>
						{clearlogo}
					</View>
					<View style={[styles.input,{top:'22%'}]}>
						<Image source={password} style={styles.inputlogo}/>
						<TextInput
							selectionColor='#fff'
							style={styles.inputtxt}
							value={this.state.passwordtxt}
							onChangeText={(passwordtxt) => this.setState({passwordtxt})}
							secureTextEntry={this.state.ifsecure}
						/>
						{showpassword}
					</View>
					<Text style={styles.forgot}>忘记密码</Text>
            	</View>
            	<View style={styles.signwrap}>
            		<View style={styles.signbtn}>
            			<Text style={styles.signtxt}>登 录</Text>
            		</View>
            		<Text style={styles.gosign}>还没有账号？马上注册惹！</Text>
            		<Text style={styles.other}>使用以下账号登录</Text>
            		<View style={styles.logowrap}>
            			<Image source={qq} style={styles.logologo} />
            			<Image source={zfb} style={styles.logologo} />
            			<Image source={wb} style={styles.logologo} />
            			<Image source={wx} style={styles.logologo} />
            		</View>
            	</View>
            </Animated.View>
		)
	}
} 
