import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrap: {
    width:'100%',
    height:'100%',
  },
  header:{
    width:'100%',
    height:60,
    backgroundColor:'#ff666b',
    position:'relative',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'center',
    zIndex:1
  },
  title:{
    color:'#fff',
    fontFamily:'Georgia',
    fontSize:18,
    fontWeight:'400',
  },
  lovelogo:{
    position:'absolute',
    right:15,
    width:28,
    height:28
  },
  line:{
    backgroundColor:'#fff',
    height:2,
  }

})

