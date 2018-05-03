import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrap: {
    width:'100%',
    height:'100%',
    alignItems:'center',
    position:'relative'
  },
  loginlogo:{
    width:90,
    height:90,
    position:'absolute',
    top:'15%'
  },
  login:{
    alignItems:'center',
    justifyContent:'center',
    width:250,
    height: 50,
    borderRadius:30,
    backgroundColor:'#ff666b', 
    shadowColor:'#ff666b',
    shadowOffset:{ width: 0, height: 7 },
    shadowOpacity:0.5,
    shadowRadius:3,
    position:'absolute',
    top:'38%',
  },
  logintxt:{
    color:'#fff',
    fontSize:16
  }
})

