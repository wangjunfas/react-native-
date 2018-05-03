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
  login:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    position:'relative'
  },
  baglogo:{
    width:80,
    height:110,
    position:'absolute',
    top:'27%'
  },
  warning:{
    marginTop:20,
    marginBottom:20,
    color:'#919191',
    fontSize:15,
    position:'absolute',
    top:'46%'
  },
  loginwrap:{
    width:150,
    height:40,
    alignItems:'center',
    justifyContent:'center', 
    backgroundColor:'#ff666b',
    borderRadius:200, 
    shadowColor:'#ff666b',
    shadowOffset:{ width: 0, height: 7 },
    shadowOpacity:0.5,
    shadowRadius:3,
    position:'absolute',
    top:'58%'
  },
  logintxt:{
    color:'#fff',
    fontSize:15
  }
})

