import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    banner: {
      backgroundColor: '#fff',
      position:'relative'
    },
    page:{
      position:'absolute',
      right:15,
      bottom:15
    },
    activity:{
      backgroundColor: '#fff',
      height:100,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
    activities:{
      alignItems:'center'
    },
    acimg:{
      width:50,
      height:50,
      marginBottom:10
    },
    acword:{
      fontSize:12
    },
    introwrap:{
      backgroundColor:'#fff',
      marginTop:17,
      alignItems:'center'
    },
    intro:{
      height:50,
      borderTopWidth:1,
      borderTopColor:'#e5e5e5',
      borderBottomWidth:1,
      borderBottomColor:'#e5e5e5',
      justifyContent:'center',
      alignItems:'center',
      width:'100%'
    },
    introtxt:{
      fontSize:16,
      fontWeight:'400',
      color:'#333'
    },
    introimg:{
      position:'relative',
      justifyContent:'center',
      alignItems:'center',
   },
    discountlogo:{
      height:40,
      width:40,
      position:'absolute',
      bottom:20,
      left:0
    },
    ftitle:{
      fontSize:15,
      fontWeight:'400'
    },
    detail:{
      marginTop:10,
      marginBottom:10,
      fontSize:12,
      color:'#9e9e9e'
    },
    price:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    someprice:{
      flexDirection:'row',
      alignItems:'flex-end',
      marginBottom:5,
    },
    rmblogo:{
      color:'#ff666b',
    },
    nowprice:{
      color:'#ff666b',
      fontSize:18,
      marginLeft:2
    },
    oldprice:{
      color:'#9e9e9e',
      textDecorationLine:'line-through',
      marginLeft:5
    },
    saletxt:{
      color:'#9e9e9e',
      marginLeft:5,
      marginBottom:2
    },
    saled:{
      color:'#9e9e9e',
    },
    addcar:{
      height:40,
      width:120,
      borderRadius:20,
      backgroundColor:'#ff666b',
      shadowColor:'#ff666b',
      shadowOffset:{ width: 0, height: 7, },
      shadowOpacity:0.5,
      shadowRadius:2,
      justifyContent:'center',
      alignItems:'center',
    },
    addcartxt:{
      color:'#fff',
    },
    finish:{
      marginTop:10,
      marginBottom:10,
      alignSelf:'center',
      height:30,
      width:75
    },
    loading:{
      alignSelf:'center',
      marginTop:10,
      marginBottom:10,
      height:30,
      width:30
    },
    totop:{
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      height:40,
      width:40,
      backgroundColor:'rgba(0,0,0,.5)',
      borderRadius:20,
      bottom:60,
      right:10
    },
    totoplogo:{
      width:20,
      height:20
    }
})

