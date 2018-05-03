import React , { Component } from 'react'
import { View ,Text,Image,ScrollView,TouchableWithoutFeedback,Animated,RefreshControl} from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import styles from './style.js'

const totop = require('../../resource/imgs/totop.png')
const car = require('../../resource/imgs/car1.png')

export default class HouseDEV extends Component {
	constructor(props){
		super(props)
		this.state={
			right:new Animated.Value(-60),
			isRefreshing:false,
		}
		this.status = false
		this.mark = false
	}
	componentDidMount(){
		this.props.renderdev(this.props.id,this.props.sign,this.props.index)
	}
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
	}
	onRefresh(){
		this.setState({
			isRefreshing:true
		})
		setTimeout(() => {
			this.props.renderdev(this.props.id,this.props.sign)
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
	render(){
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
					{
						this.props.devlist[this.props.index].map((item,index) => {
							var islizi = null
							if (item.isLizi) {
								islizi = <View style={styles.self}>
												<Text style={styles.selftxt}>自营</Text>
										  </View>
							}

							return(
								<View style={styles.item} key={item.id}>
									<Image style={styles.itemimg} source={{uri:item.pic}} />
									<View style={styles.itemdetail}>
										<Text style={styles.title}>{item.title}</Text>
										<View style={styles.info}>
											{islizi}
											<Text style={styles.numAndoldprice}>已售出 {item.salesCount} 件</Text>
											<Text style={styles.numAndoldprice}>原价：{item.marketPrice.toFixed(2)}元</Text>
										</View>
										<Text style={styles.newrprice}>¥ {item.liziPrice.toFixed(2)}</Text>
									</View>
									<Image source={car} style={styles.tocar}/>
								</View>
							)
						})
					}
						
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

		