import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
              },
user:{
flexDirection:'row',
position:'absolute',
marginTop:hp('1%'),
top:hp('13.2%'),
fontSize:hp('2.5%'),
color:'green',
marginHorizontal:wp('2%')

},
but:{
position:'absolute',
color:'white',
justifyContent:'center',
marginLeft:wp('7%'),
bottom:0.1,
height:hp('4.5%'),
width: wp('5%'),
},
but2:{
position:'absolute',
color:'white',
justifyContent:'center',
marginHorizontal:wp('71%'),
bottom:0.1,
height:hp('4.5%'),
width: wp('5%'),
},
but3:{
position:'absolute',
color:'white',
justifyContent:'center',
marginHorizontal:wp('74%'),
bottom:0.1,
height:hp('4.5%'),
width: wp('6%'),
},
ret:{

borderRadius:27,
position:'absolute',
justifyContent:'center',
marginHorizontal:wp('13%'),
marginVertical:hp('65%'),
height:hp('10%'),
width: wp('15%'),
},
buttext:{
textAlign:'center',
color:'white',
fontWeight:'bold',
fontSize:hp('2.5%'),
},
titreV:{
alignItems: 'center',
},
titre:{
// color:'#2f3c7e',
fontSize:16,
// fontFamily:'Lobster-Regular'
},
titre2:{
color:'#2f3c7e',
fontSize:hp('3%'),
},
result:{
color:'white',
marginLeft:wp('8%')
  },
cancel:{

backgroundColor:'red',
color:'red'

   },
textMod:{
// textDecorationLine: 'underline',
// color:'white',
fontWeight:'100',
marginLeft:wp('2%'),
// fontFamily:'Lobster-Regular'
    },
    textMod2:{
      // textDecorationLine: 'underline',
      // color:'white',
      fontWeight:'100',
      marginLeft:wp('3%'),
      // fontFamily:'Lobster-Regular'
            },
icone:{
// width:wp('13%')
    },
buttadd:{
alignItems:'center',
flexDirection:'row',
marginLeft:wp('3%')
      },
actbut:{
top:wp('2%'),
flexDirection:'column',
justifyContent:'space-between',
     },
     fivebutt:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#2f3c7e',
      height:hp('20%'),
      width:wp('45%'),
      margin:hp('2%'),
      borderRadius:15,

     },
     listbut:{
      backgroundColor:'#bf1613',
      height:hp('10%'),
      width:wp('40%'),
      margin:hp('2%'),
      borderWidth:1,
      borderColor:'white',
      borderRadius:15
     },
     modliste:{
      // top:hp('10%'),
      width:wp('50%'),
      // height:hp('40%'),
      // backgroundColor:'#cce7e8',
      // marginLeft:wp('49%'),
      alignItems:'center',
      borderRadius:15

     },
     twobut:{
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center'
     },
     fullScreen: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    playButton: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
    },
    controls: {
      backgroundColor: 'white',
      opacity: 0.7,
      borderRadius: 5,
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
    },
    progress: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 3,
      overflow: 'hidden',
    },
    rateControl: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    playControl: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    resizeModeControl: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }

}
);

export const lists = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  listItem: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  text:{
color:'white'
  }
});

// const container = StyleSheet.compose(page.container, lists.listContainer);
// const text = StyleSheet.compose(page.text, lists.listItem);

export default styles;
// export lists;
