import React , { Component } from 'react'
import { View ,Text,Image,ScrollView} from 'react-native'
import styles from './style.js'



export default class Classfunc extends Component {
	constructor(props){
		super(props)
		this.state={

		}
	}
	componentDidMount(){
		this.props.renderfunc()
	}

	render(){

		return (
			<ScrollView 
				contentContainerStyle={styles.wrap} 
				bounces={false}
				showsVerticalScrollIndicator={false}
			>
				{
					this.props.funclist.map((item,index) => {
						var newstyle = null
						var num = index + 1
						if ( (num+1) % 9 == 0 || (num+2) % 9 == 0 || num % 9 == 0 ) {
							newstyle = {marginBottom:40} 
						}
						return (
							<View style={[styles.func,newstyle]} key={item.id}>
								<Text style={styles.functxt}>{item.name}</Text>
							</View>
						)
					})

				}
				
			</ScrollView>

		)
	}
} 