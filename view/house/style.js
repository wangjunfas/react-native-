import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrap: {
    width:'100%',
    height:'100%',
  },
  header:{
    position:'relative',
    width:'100%',
    height:70,
    backgroundColor:'#ff666b',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'center',
    paddingBottom:15,
  },
  title:{
    color:'#fff',
    fontFamily:'Georgia',
    fontSize:16,
    fontWeight:'500',
  },
  search:{
    position:'absolute',
    right:15,
    bottom:15
  },
  line:{
    backgroundColor:'#ff666b',
    height:1,
  }
})

