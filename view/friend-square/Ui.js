import React , { Component } from 'react'
import { View , Text , Image , ScrollView , Dimensions ,RefreshControl} from 'react-native'
import {PullView} from 'react-native-pull'
import { LinearGradient } from 'expo'
import styles from './style.js'

const BannerWidth = Dimensions.get('window').width - 20;
const BannerHeight = BannerWidth * 690 / 1182

const good = require('../../resource/imgs/good.png')
const like = require('../../resource/imgs/Like.png')
const refresh = require('../../resource/imgs/refresh.gif')
const toplogo = require('../../resource/imgs/top.png')


export default class Friendsquare extends Component {
	constructor(props){
		super(props)
		this.state={
			refreshtxt:'',
			isRefreshing:false
		}
		this.status = false
		this.mark = false
	}
	componentDidMount(){
		this.props.rendersqu()
	}
	// topIndicatorRender(){
	// 	return(
	// 		<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
	// 			<Image source={refresh} style={{width:100,height:100}}/>
	// 			<Text style={{marginTop:30}}>{this.state.refreshtxt}</Text>
	// 		</View>	
	// 	)
	// }
	// onPulling(){
	// 	this.setState({
	// 		refreshtxt:'下拉刷新...'
	// 	})
	// }
	// onPullOk(){
	// 	this.setState({
	// 		refreshtxt:'释放刷新...'
	// 	})
	// }
	// onPullRelease(resolve){
	// 	this.setState({
	// 		refreshtxt:'正在刷新...'
	// 	})
		
	// 	setTimeout(() => {
	// 		resolve() 
	// 	},3000)
	// }
	scroll(e){
		this.status =  e.nativeEvent.contentOffset.y > 0 ? true : false
		if (this.mark != this.status) {
			if (this.status) {
				this.props.changeTop(-60)
			}else{
				this.props.changeTop(0)
			}
		}
		this.mark = this.status
	}
	onRefresh(){
		this.setState({
			isRefreshing:true
		})
		setTimeout(() => {
			this.props.rendersqu()
			this.setState({
				isRefreshing:false
			})
		},3000)
	}
	render(){
		return (
			<ScrollView 
				refreshControl={
	                     <RefreshControl
	                        refreshing={this.state.isRefreshing}
	                        onRefresh={this.onRefresh.bind(this)}
	                        tintColor="#ff666b"
	                      />
	            }
				showsVerticalScrollIndicator={false}
				onScroll={(e) => this.scroll(e)}
				scrollEventThrottle={1}
			>
				{
					this.props.squlist.map((item,index) => {
						var item = item.article
						var str = item.dateCreated;
						str=str.replace(/-/g,':').replace(' ',':');
						str=str.split(':');
						var d1 = new Date(str[0],(str[1]-1),str[2],str[3],str[4],str[5]);
						var d2 = new Date();
						var flowdate=parseInt((d2.getTime()-d1.getTime())/1000/60/60/24/30)
						if(flowdate >= 12){
							flowdate =  item.dateCreated.substr(0,10)
						}else{
							flowdate = flowdate + "个月前"
						}
						return (
							<View key={item.id} style={[styles.beauty,{width:BannerWidth}]} >
								<View style={{width:BannerWidth,height:BannerHeight,position:'relative'}}>
									<Image style={styles.banner} source={{uri:item.imgUrl}} />
									<Image source={toplogo} style={styles.toplogo} />
									<LinearGradient  colors={['transparent', 'rgba(0,0,0,.7)']} start={[0,0.85]} end={[0,1]} style={styles.detail}>
										<Text style={styles.detailtxt}>{item.title}</Text>
			      					</LinearGradient>	
								</View>
								<View style={styles.user}>
									<Image style={styles.userlogo} source={{uri:item.userPic}} />
									<View style={styles.userinfo}>
										<Text style={styles.username}>{item.nickname}</Text>
										<Text style={styles.userdate}>{flowdate}</Text>
									</View>
								</View>
								<View style={styles.interact}>
									<View style={styles.goodandlike}>
										<Image source={like} style={styles.like} />
										<Text style={styles.num}>{item.favoriteNum}</Text>
										<Image source={good}  style={styles.good} />
										<Text style={styles.num}>{item.goodNum}</Text>
									</View>
									<View style={styles.concern}>
										<Text style={styles.concerntxt}>+ 关注</Text>
									</View>
								</View>
							</View>
						)
					})
				}
			</ScrollView>	
		)
	}
} 

		{/*	<PullView
				style={styles.wrap}
				onPulling={() => this.onPulling()}
				onPullOk={() => this.onPullOk()}
				onPullRelease={(resolve) => this.onPullRelease(resolve)}
				topIndicatorRender={() => this.topIndicatorRender()}
				topIndicatorHeight={100}
			>*/}


	