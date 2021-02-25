
import React, {Component} from 'react';
import {Image,View,TouchableOpacity,Text} from 'react-native';  
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styleFooter from '../statics/styles/styleFooter';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Footer extends React.Component{
render(){return(<View 
style={styleFooter.container}
>
<View>
  <TouchableOpacity
//   onPress={() =>this.setState({consultation:false,captation:false,consucolor:'blue',captcolor:'blue'})}
  onPress={this.props.OpenHome}
  >
        <Image style={styleFooter.imageIcon}
                    source={require('../statics/image/home.png')}>
        </Image>
  </TouchableOpacity>
</View>
<View>
<TouchableOpacity
//   onPress={() =>alert('Plus')}
  onPress={this.props.OpenPlus}
  >
        <Image style={styleFooter.imagePlus}
                    source={require('../statics/image/Plus.png')}>
        </Image>
  </TouchableOpacity>
</View>
<View>
<TouchableOpacity
//   onPress={() =>alert('Search')}
onPress={this.props.Opensearch}
  >
        <Image style={styleFooter.imageIcon}
                    source={require('../statics/image/search.png')}>
        </Image>
  </TouchableOpacity>
</View>

</View>   )}}