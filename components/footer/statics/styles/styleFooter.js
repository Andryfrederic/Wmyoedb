import { StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styleFooter = StyleSheet.create({
container:
{
    flexDirection:'row',
    position:'absolute',
    bottom:hp('1%'),
    alignSelf:'flex-end',
    height:hp('6%'),
    width:wp('90%'),
    backgroundColor:'white',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:20
},
imageIcon:{
    width:wp('6.8%'),
    height:hp('3.2%'),
  },
imagePlus:{
    width:wp('7%'),
    height:hp('5%'),
  }

}
);
export default styleFooter;
