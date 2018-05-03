import React , { Component } from 'react'
import { View ,Text,Image,Dimensions,ScrollView,RefreshControl,Animated,TouchableWithoutFeedback} from 'react-native'
import Carousel from 'react-native-banner-carousel';
import {PullView} from 'react-native-pull'
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = BannerWidth * 47 / 75
const mainheight = Dimensions.get('window').height - 130

import styles from './style.js'

const discount = require('../../resource/imgs/discount.png')
const totop = require('../../resource/imgs/totop.png')
const finish = require('../../resource/imgs/readfinish.png')
const loading = require('../../resource/imgs/loading.gif')

export default class Lizi extends Component {
	constructor(props){
		super(props)
		this.state={
			// refreshtxt:''
			right:new Animated.Value(-60),
			isRefreshing:false,
		}
		this.status = false
		this.mark = false
		this.viewheight = 5000
		this.markheight = 6000
	}
	componentDidMount(){
		this.props.renderbanner()
		this.props.renderactivity()
		this.props.renderbrand()
		this.props.rendergoods()
		
	}
	topIndicatorRender(){
		const refresh = require('../../resource/imgs/refresh.gif')
		return(
			<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
				<Image source={refresh} style={{width:100,height:100}}/>
				// <Text style={{marginTop:30}}>{this.state.refreshtxt}</Text>
			</View>	
		)
	}
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
	onscroll(e){
		this.status =  e.nativeEvent.contentOffset.y > 300 ? true : false
		if (this.mark != this.status) {
			if (this.status) {
				this.changetop(10)
			}else{
				this.changetop(-60)
			}
		}
		this.mark = this.status

		if (this.markheight != this.viewheight) {
			if(e.nativeEvent.contentOffset.y > this.viewheight - mainheight && this.viewheight > 3000){
				this.props.loadgoods(this.props.page)
				this.markheight = this.viewheight
			}
		}		

	}
	onRefresh(){
		this.setState({
			isRefreshing:true
		})
		setTimeout(() => {
			this.props.renderbanner()
			this.props.renderactivity()
			this.props.renderbrand()
			this.props.rendergoods()
			this.setState({
				isRefreshing:false
			})
		},3000)
	}
	changetop(value){
		Animated.spring( 
      	  	this.state.right, 
      	  	{
	            toValue: value,
	            friction: 6,// 摩擦力，默认为7.
	            tension: 100,// 张力，默认40。
	            duration:50
			}).start()
	}
	gototop(){
		this.scroll.scrollTo({x:0,y: 0,animated:true})
	}
	onlayout(e){
			this.viewheight = e.nativeEvent.layout.height
	}
	render(){
		var isloading = this.props.isfinish ? <Image source={finish} style={styles.finish}/> : <Image source={loading} style={styles.loading}/> 
		return (
			<View style={{height:'100%',width:'100%',overflow:'hidden'}}>
			<ScrollView
				ref={(scroll) => {this.scroll = scroll}}
			 	refreshControl={
                     <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.onRefresh.bind(this)}
                        tintColor="#ff666b"
                      />
                }
				showsVerticalScrollIndicator={false}
				onScroll={(e) => this.onscroll(e)}
				scrollEventThrottle={50}
			>
			<View onLayout={(e) => this.onlayout(e)}>
				<View style={styles.banner}>
					<Carousel
	                    autoplay
	                    autoplayTimeout={3000}
	                    loop
	                    index={5}
	                    pageSize={BannerWidth}
	                    pageIndicatorContainerStyle={styles.page}
	                    pageIndicatorStyle={{backgroundColor:'#fff'}}
						activePageIndicatorStyle={{backgroundColor:'#000'}}
	                >
	                    {
	                    	this.props.bannerlist.map((item, index) => {
		                    	return (
		                    		<View key={item.id}>
						                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: item.image }} />
						            </View>
		                    	)
	                    	})
                    	}
                	</Carousel>
				</View>
				<View style={styles.activity}>	
					{
						this.props.activitylist.map((item,index) => {
							return (
								<View style={styles.activities} key={item.id}>
									<Image style={styles.acimg} source={{uri:item.image}} />
									<Text style={styles.acword}>{item.name}</Text>
								</View>
							)
						})
					}	
				</View>
				{
					this.props.brandlist.map((item,index) => {
						return (
							<View key={item.id} style={{marginTop:17}}>
								<Image style={{ width: BannerWidth, height: BannerHeight }} source={{uri:item.picUrl}} />
							</View>
						)
					})
				}
				<View style={styles.introwrap}>
					<View style={styles.intro}>
						<Text style={styles.introtxt}>单品推荐</Text>
					</View>

					{
						this.props.goodslist.map((item,index) => {
							var discountlogo = null
							if (item.promoLeftTime !=0 ) {
								discountlogo = <Image style={styles.discountlogo} source={discount}/>
							}

							return (
								<View  key={item.itemId} style={{width:BannerWidth-30,borderBottomWidth:1,borderBottomColor:'#e5e5e5',paddingBottom:20}}>
									<View style={styles.introimg}>
										<Image style={{ width: BannerHeight, height: BannerHeight }} source={{uri:item.picSmall}} />
										{discountlogo}
									</View>
									<View>
										<Text style={styles.ftitle}>{item.productTitle}</Text>
									</View>
									<View>
										<Text style={styles.detail}>{item.recommend}</Text>
									</View>
									<View style={styles.price}>
										<View style={styles.someprice}>
											<Text style={styles.rmblogo}>¥</Text>
											<Text style={styles.nowprice}>{item.proPrice.toFixed(2)}</Text>
											<Text style={styles.oldprice}>{item.marketPrice.toFixed(2)}</Text>
											<Text style={styles.saletxt}>已售出：</Text>
											<Text style={styles.saled}>{item.salesCount}</Text>
										</View>
										<View style={styles.addcar}>
											<Text style={styles.addcartxt}>加入购物车</Text>
										</View>
									</View>
								</View>
							)
						})
					}
				</View>
				{isloading}
			</View>	
			</ScrollView>
			<TouchableWithoutFeedback onPress={() =>this.gototop()}>	
				<Animated.View style={[styles.totop,{right:this.state.right}]}>
						<Image source={totop} style={styles.totoplogo} />
				</Animated.View>
			</TouchableWithoutFeedback>
			</View>
		)
	}
} 
 
