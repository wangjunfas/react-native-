import React ,{ Component } from 'react'
import { Image,View,Test,TouchableWithoutFeedback } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

import { View as House } from '../house/'
import { View as Class } from '../class/'
import { View as Friend } from '../friend/'
import { View as Car } from '../car/'
import { View as Mine } from '../mine/'
import { View as Signin } from '../signin/'
 
export default class Home extends Component {
	constructor(props){
		super(props)
	}
	onRef(ref){
        this.signin = ref
    }
	movesignin(){
		this.signin.onpress()
	}
	render(){
		const house1Icon = require('../../resource/imgs/home1.png')
		const house2Icon = require('../../resource/imgs/home2.png')
		const class1Icon = require('../../resource/imgs/class1.png')
		const class2Icon = require('../../resource/imgs/class2.png')
		const friend1Icon = require('../../resource/imgs/talk1.png')
		const friend2Icon = require('../../resource/imgs/talk2.png')
		const car1Icon = require('../../resource/imgs/car1.png')
		const car2Icon = require('../../resource/imgs/car2.png')
		const mine1Icon = require('../../resource/imgs/mine1.png')
		const mine2Icon = require('../../resource/imgs/mine2.png')
		
		return (
		<View style={{width:'100%',height:'100%'}}>
			<TabNavigator
				swipeEnabled={true}
			>
		        <TabNavigator.Item
		          selected={this.props.TabName === 'house'}
		          title="首页"
		          selectedTitleStyle={{color:'#ff666b'}}
		          renderIcon={() => <Image source={house1Icon} />}
		          renderSelectedIcon={() => <Image source={house2Icon} />}  
		          onPress={() => this.props.ChangeTabName('house')}
		        > 
		          <House navigate={this.props.navigation.navigate}/>
		        </TabNavigator.Item>

		        <TabNavigator.Item
		          selected={this.props.TabName === 'class'}
		          title="分类"
		          selectedTitleStyle={{color:'#ff666b'}}
		          renderIcon={() => <Image source={class1Icon} />}
		          renderSelectedIcon={() => <Image source={class2Icon} />}  
		          onPress={() => this.props.ChangeTabName('class')}
		        >
		          <Class />
		        </TabNavigator.Item>

		        <TabNavigator.Item
		          selected={this.props.TabName === 'friend'}
		          title="丽子圈"
		          selectedTitleStyle={{color:'#ff666b'}}
		          renderIcon={() => <Image source={friend1Icon} />}
		          renderSelectedIcon={() => <Image source={friend2Icon} />}  
		          onPress={() => this.props.ChangeTabName('friend')}
		        >
		          <Friend SignIn={() => this.movesignin()}/>
		        </TabNavigator.Item>

		        <TabNavigator.Item
		          selected={this.props.TabName === 'car'}
		          title="购物车"
		          selectedTitleStyle={{color:'#ff666b'}}
		          renderIcon={() => <Image source={car1Icon} />}
		          renderSelectedIcon={() => <Image source={car2Icon} />}  
		          onPress={() => this.props.ChangeTabName('car')}
		        >
		          <Car SignIn={() => this.movesignin()}/>
		        </TabNavigator.Item>

		        <TabNavigator.Item
		          selected={this.props.TabName === 'mine'}
		          title="我的"
		          selectedTitleStyle={{color:'#ff666b'}}
		          renderIcon={() => <Image source={mine1Icon} />}
		          renderSelectedIcon={() => <Image source={mine2Icon} />}  
		          onPress={() => this.props.ChangeTabName('mine')}
		        >
		          <Mine SignIn={() => this.movesignin()}/>
		        </TabNavigator.Item>
		      </TabNavigator>
		      <Signin  onRef={(value) => this.onRef(value)}/>
	    </View>
		)
	}
}