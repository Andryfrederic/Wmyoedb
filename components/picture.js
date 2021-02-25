import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Alert,
  Button,
  Image,
  AsyncStorage, 
  StatusBar,
  NativeAppEventEmitter,
  CheckBox
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Picture  extends React.Component{

    static navigationOptions =
     {
      headerShown: false
     };
          constructor(props){
          super(props)
              this.state={
               
                    
          }
  }
    
  render(){
  
  return(
  <View style={styles.container}>         
            <Text
            style={{textAlign:'center',
            fontSize:20}}>
                Header
            </Text>
  </View>  
  );
  }
  }
  
  
  
  
  
    
    
  const styles=StyleSheet.create({
  container:{
//   backgroundColor:'#5C4DB1',
justifyContent:'center',
  flex:1,
  },
  headcontainer:{
    marginTop:hp('7%')
  },
  titre:{
  textAlign:'center',
  fontSize:hp('2%'),
  marginTop:hp('7%'),
  color:'white',
  marginBottom:hp('3%'),
  // fontFamily:'Lobster-Regular'
  },
  place:{
      color:'white', 
      fontSize:hp('2.5%'),
      width: wp('70%'),
      // height:hp('10%'),
      marginLeft:wp('2%'),
      // borderBottomColor:'#C9A022',
      // borderBottomWidth:2,
  },
  placeP:{
    color:'white', 
      fontSize:hp('2.5%'),
      width: wp('70%'),
      // height:hp('10%'),
      marginLeft:wp('2%'),
  }
  ,
  but:{
  borderRadius:27,
  backgroundColor:'#DC4F89',
  color:'white',
  justifyContent:'center',
  height:hp('6%'),
  width: wp('80%'),
  },
  buttext:{
  textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:hp('2.5%') 
  },
  oublie:{
  textAlign:'center',
  color:'#2f3c7e'
  },
  ima:{
    width:wp('25%'),
    height:hp('2.5%'),
    alignSelf:'center'
    },
  myoedb:{
    width:wp('38%'),
    height:hp('4%'),
    alignSelf:'center',
    marginTop:hp('5%')
  },
  tex:{
    marginLeft:hp('3%'),
    fontSize:hp('2.5%'),
    color:'grey'},
  
  inputIcon:{
  // position:'absolute',
  // // top:10,
  // left:15
  },
  
  btneye:{
   position:'absolute',
   top:10,
   right:15},
  
  butV:{
  alignItems: 'center',
  justifyContent:'center',
  marginTop:hp('5%')
    },
  
  texinput:{
      marginTop:10
    }
  
  })