import React, {
  Component
} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Clipboard,
  ScrollView,
  Modal,
  TextInput,
  Keyboard,
  ActionSheetIOS
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Styles from './style'
import Add from './tools/modalViews/audio/statics/styles/styleAdd';
import styles from '../styles/styleAcuueil';
import Footer from './footer/layouts/footer';
export default class CategoryView extends React.Component {
  static navigationOptions =
  {
   headerShown: false
  };
   constructor(props){
  super(props)
  this.state={  
      refreshing:false,
      cat:this.props.navigation.state.params.cat, 
      dataSource:this.props.navigation.state.params.dataSource,
      ide:'' ,
      act:false,
      edit:false,
      intitule:'',
      description:'' ,
      create:false,
      show1:false,
      videolang:false,
      plus:false,
      categorySearch:false,  
      addcat:false   
      
              }
      this.arrayholder = this.props.navigation.state.params.cat;
                      }

handleRefresh = () => {
      this.setState({
           refreshing: false
      });
}
ListViewItemSeparator = () => {
return (
      <View
      style={{
      height: 2,
      width: "100%",
      backgroundColor: "#000",
      }}
      />
      );
}
update(){
      const {intitule,description,ide}=this.state;
      console.log("intitule: "+intitule+'description: '+description+'ide: '+ide);
}
openSearch() {
      this.setState({categorySearch:true})
    }
openPlus() {
     this.setState({plus:true});
    }
openHome() {
     this.props.navigation.navigate('Accueil');
    }
showcategory(id,intitule,description){
const {ide,act}=this.state;
const copied="Intiule: "+intitule+"\n"+"Description: "+description
if(id==ide){  return(
  <View style={Styles.tableau}>
      <View style={Styles.ligne}>
              <TouchableOpacity
              style={Styles.fontgris}
              onPress={()=>this.setState({ide:'',act:false})}>
                      <Text style={[Styles.titre,Styles.bold]}>
                              {intitule}
                      </Text>
                      <Text style={Styles.description}>
                              {description}
                      </Text>
              </TouchableOpacity>
             <TouchableOpacity
              style={Styles.Menuaction}
              onPress={() =>this.setState({act:!this.state.act,ide:id})}
              >
              <Icon name={'ios-ellipsis-vertical'} size={28} color={'black'}/>
              </TouchableOpacity>
              {act?(<View
              style={Styles.action}>
                              <TouchableOpacity
                              onPress={()=>{Clipboard.setString(copied),alert('text copied')}}>
                                      <Image style={Styles.image}
                                      source={require('../image/copy.png')}>
                                      </Image>
                              </TouchableOpacity>
                              <TouchableOpacity
                              onPress={()=>{this.setState({edit:true,intitule:intitule,description:description})}}>
                                      <Image style={Styles.image}
                                      source={require('../image/edit-2.png')}>
                                      </Image>
                              </TouchableOpacity>
                              <TouchableOpacity
                              onPress={()=>alert('delete')}>
                                      <Image style={Styles.imagedelete}
                                      source={require('../image/delete.png')}>
                                      </Image>
                              </TouchableOpacity>
              </View> ):null}                                  
                           
      </View>
  </View>
  )}else{
      return(
              <View style={Styles.tableau}>
                  <View style={Styles.ligne}>
                          <TouchableOpacity
                          onPress={()=>this.setState({ide:id})}>
                                  <Text style={Styles.titre}>
                                          {intitule}
                                  </Text>
                          </TouchableOpacity>
                         <TouchableOpacity
                          style={Styles.Menuaction}
                          onPress={() =>{this.setState({act:true,ide:id})}}
                          >
                          <Icon name={'ios-ellipsis-vertical'} size={28} color={'black'}/>
                          </TouchableOpacity>
                                              
                                       
                  </View>
                   
              </View>
              )
  }
}

LangView=(id,intitule,index,abrev)=>{
      const {idLan}=this.state;
      let colors = ['#FFE9F9', '#EAF9FE', '#FFF5E5', '#FBF5FF','#FFF1EF','#A2A2A2'];
      if (id!== ''){
  if (idLan==id){
    return(
      <TouchableOpacity
      onPress={()=>{this.setState({idLan:''},this.handleTranslate(abrev))}}>
                      <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#DBDDDC',borderWidth:0.5,borderRadius:20,justifyContent:'center'}}>
                                                            <Text style={{
                                                              marginHorizontal:wp('3%'),
                                                              marginVertical:hp('0.5%'),
                                                              fontWeight:'100',
                                                              textAlign:'center',
                                                              opacity:0.5
                                                            }}>
                                                              {intitule}
                                                            </Text>
                                                            <View
                                                            style={{
                                                              width:wp('4.5%'),
                                                              height:hp('2.5%'),
                                                              borderRadius:30,
                                                              position:'absolute',
                                                              right:0,
                                                              top:hp('-1%')
                                                            }}>
                                                              <Image style={{
                                                width:wp('4.5%'),
                                                height:hp('2.5%'),
                                              }}
                                                          source={require('../image/Check-category.png')}>
                                              </Image>
  
                                                            </View>
                                                        
                                                          {/* {this.contentView(item.id_expression,item.content_langue_origine,item.content_langue_cible,item.audio_langue_origine,item.intitule,item.date_creation,item.f_name,item.type_file,item.legende_f)}          */}
                      </View>
    </TouchableOpacity>
                                                        
                                                        
    );
  }
  else{
    return(
      <TouchableOpacity
      // style={{
      //   backgroundColor:'red'
      // }}
      onPress={()=>{this.setState({idLan:id}),this.handleTranslate(abrev)}}>
                      <View style={{alignItems:'center',borderWidth:0.5,borderRadius:20,justifyContent:'flex-start'}}>
                                                            <View
                                                            style={{
                                                              backgroundColor:colors[index % colors.length],
                                                              borderRadius:20 
                                                            }}>
                                                            <Text style={{
                                                              marginHorizontal:wp('3%'),
                                                              marginVertical:hp('0.5%'),
                                                              fontWeight:'100',
                                                              textAlign:'center',
                                                              opacity:0.5
                                                            }}>
                                                              {intitule}
                                                            </Text>
                                                            </View>
                                                          {/* {this.contentView(item.id_expression,item.content_langue_origine,item.content_langue_cible,item.audio_langue_origine,item.intitule,item.date_creation,item.f_name,item.type_file,item.legende_f)}          */}
                      </View>
    </TouchableOpacity>
                                                        
                                                        
    );
  }
}
}

categoryView=(id,intitule,index)=>{
      const {idecat}=this.state;
      let colors = ['#FFE9F9', '#EAF9FE', '#FFF5E5', '#FBF5FF','#FFF1EF','#A2A2A2'];
      if (id!== ''){
  if (idecat==id){
    return(
      <TouchableOpacity
      onPress={()=>this.setState({idecat:'',pic:''})}>
                      <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#DBDDDC',borderWidth:0.5,borderColor:'#5C4DB1',borderRadius:20,justifyContent:'center'}}>
                                                            <Text style={{
                                                              marginHorizontal:wp('3%'),
                                                              marginVertical:hp('0.5%'),
                                                              fontWeight:'100',
                                                              textAlign:'center',
                                                              opacity:0.5
                                                            }}>
                                                              {intitule}
                                                            </Text>
                                                            <View
                                                            style={{
                                                              width:wp('4.5%'),
                                                              height:hp('2.5%'),
                                                              borderRadius:30,
                                                              position:'absolute',
                                                              right:0,
                                                              top:hp('-1%')
                                                            }}>
                                                              <Image style={{
                                                width:wp('4.5%'),
                                                height:hp('2.5%'),
                                              }}
                                                          source={require('../image/Check-category.png')}>
                                              </Image>
  
                                                            </View>
                                                        
                                                          {/* {this.contentView(item.id_expression,item.content_langue_origine,item.content_langue_cible,item.audio_langue_origine,item.intitule,item.date_creation,item.f_name,item.type_file,item.legende_f)}          */}
                      </View>
    </TouchableOpacity>
                                                        
                                                        
    );
  }
  else{
    return(
      <TouchableOpacity
      // style={{
      //   backgroundColor:'red'
      // }}
      onPress={()=>{this.setState({idecat:id,pic:id})}}>
                      <View style={{alignItems:'center',borderWidth:0.5,borderColor:'#5C4DB1',borderRadius:20,justifyContent:'flex-start'}}>
                                                            <View
                                                            style={{
                                                              backgroundColor:colors[index % colors.length],
                                                              borderRadius:20 
                                                            }}>
                                                            <Text style={{
                                                              marginHorizontal:wp('3%'),
                                                              marginVertical:hp('0.5%'),
                                                              fontWeight:'100',
                                                              textAlign:'center',
                                                              opacity:0.5
                                                            }}>
                                                              {intitule}
                                                            </Text>
                                                            </View>
                                                          {/* {this.contentView(item.id_expression,item.content_langue_origine,item.content_langue_cible,item.audio_langue_origine,item.intitule,item.date_creation,item.f_name,item.type_file,item.legende_f)}          */}
                      </View>
    </TouchableOpacity>
                                                        
                                                        
    );
  }
}
}

LangaudioView=(id,intitule,index,abrev)=>{
      const {idLan}=this.state;
      let colors = ['#FFE9F9', '#EAF9FE', '#FFF5E5'
      , '#FBF5FF','#FFF1EF','#A2A2A2'];
      if (id!== ''){
  if (idLan==id){
    return(
      <TouchableOpacity
      onPress={()=>{this.setState({idLan:'',pickerValueHolder:''})}}>
                      <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#DBDDDC',borderWidth:0.5,borderRadius:20,justifyContent:'center'}}>
                                                            <Text style={{
                                                              marginHorizontal:wp('3%'),
                                                              marginVertical:hp('0.5%'),
                                                              fontWeight:'100',
                                                              textAlign:'center',
                                                              opacity:0.5
                                                            }}>
                                                              {intitule}
                                                            </Text>
                                                            <View
                                                            style={{
                                                              width:wp('4.5%'),
                                                              height:hp('2.5%'),
                                                              borderRadius:30,
                                                              position:'absolute',
                                                              right:0,
                                                              top:hp('-1%')
                                                            }}>
                                                              <Image style={{
                                                width:wp('4.5%'),
                                                height:hp('2.5%'),
                                              }}
                                                          source={require('../image/Check-category.png')}>
                                              </Image>
  
                                                            </View>
                                                        
                                                          {/* {this.contentView(item.id_expression,item.content_langue_origine,item.content_langue_cible,item.audio_langue_origine,item.intitule,item.date_creation,item.f_name,item.type_file,item.legende_f)}          */}
                      </View>
    </TouchableOpacity>
                                                        
                                                        
    );
  }
  else{
    return(
      <TouchableOpacity
      // style={{
      //   backgroundColor:'red'
      // }}
      onPress={()=>{this.setState({idLan:id,pickerValueHolder:abrev})}}>
                      <View style={{alignItems:'center',borderWidth:0.5,borderRadius:20,justifyContent:'flex-start'}}>
                                                            <View
                                                            style={{
                                                              backgroundColor:colors[index % colors.length],
                                                              borderRadius:20 
                                                            }}>
                                                            <Text style={{
                                                              marginHorizontal:wp('3%'),
                                                              marginVertical:hp('0.5%'),
                                                              fontWeight:'100',
                                                              textAlign:'center',
                                                              opacity:0.5
                                                            }}>
                                                              {intitule}
                                                            </Text>
                                                            </View>
                                                          {/* {this.contentView(item.id_expression,item.content_langue_origine,item.content_langue_cible,item.audio_langue_origine,item.intitule,item.date_creation,item.f_name,item.type_file,item.legende_f)}          */}
                      </View>
    </TouchableOpacity>
                                                        
                                                        
    );
  }
      
      }
  }
  searchFilterFunction = text => {
      this.setState({
        value: text,
      });
  
      const newData = this.arrayholder.filter(item =>{
        const itemData = `${item.intitule.toUpperCase()} ${item.intitule.toUpperCase()}`;
        // const itemData = item.content_langue_origine ? item.content_langue_origine: '';
        const textData = text.toUpperCase();
  
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        cat: newData,
      });
    };
    render() {

        return (
          <View style={Styles.container}>
                 
                  <View style={{justifyContent:'center',height:hp('6%'),marginLeft:wp('2.5%'),marginTop:hp('5%')}}>
                              <View
                              style={{height:hp('4%'),width:wp('100%'),flexDirection:'row',justifyContent:'space-between'}}>
                              <TouchableOpacity 
                                      onPress={() =>this.props.navigation.goBack()}>
                                          <View
                              style={{
                              flexDirection:'row'
                              }}>
                                      <Image style={{
                                          width:wp('5%'),
                                          height:hp('3%'),
                                      }}
                                      source={require('../image/trace.png')}>
                                      </Image>
                                      <View>
                                          <Text style={{
                                          color:'#5C4DB1',
                                          marginLeft:wp('3%'),
                                          fontSize:hp('2.2%')
                                          }}>
                                              ALL CATEGORIES
                                          </Text>
                                      </View>
                              </View>
                              </TouchableOpacity>
                              
                                      <View
                                      style={{
                                      flexDirection:'row',
                                      position:'absolute',
                                      right:wp('5%')
                                      }}>
                                              <Image style={{
                                                  width:wp('5%'),
                                                  height:hp('3%'),
                                              }}
                                                          source={require('../image/notification.png')}>
                                              </Image>
                                          
                                      </View>
                              </View>
                  </View>
                  {this.state.more?(<View 
                  style={{
                  marginLeft:wp('5%'),
                  }}>
                                                                      <TouchableOpacity
                                                                      onPress={()=>{this.setState({more:false}),this.searchFilterFunction(" ")}}>
                                                                              <Text
                                                                              style={{
                                                                                fontSize:hp('2%'),
                                                                                opacity:0.5,
                                                                              
                                                                              }}>
                                                                                See all
                                                                              </Text>
                                                                      </TouchableOpacity>
                  </View>):null}
                  <View style={Styles.listContainer}>
                              <FlatList
                              data={this.state.cat}
                              extraData={this.state}
                              keyExtractor={(item)=>item.id}
                              refreshing={this.state.refreshing}
                              onRefresh={this.handleRefresh}
                              enableEmptySections={true}
                              renderSeparator= {this.ListViewItemSeparator}
                              renderItem={({item,index})=>
                              this.showcategory(item.id,item.intitule,item.description)
                              }
                              />
                  </View>
                  
              
                  {/* <View style={{backgroundColor:'red',
              width:wp('100%'),
              height:hp('20%')
              }}>
                              <FlatList
                              data={this.state.dataSource}
                              extraData={this.state}
                              keyExtractor={(item)=>item.id}
                              refreshing={this.state.refreshing}
                              onRefresh={this.handleRefresh}
                              enableEmptySections={true}
                              renderSeparator= {this.ListViewItemSeparator}
                              renderItem={({item,index})=>
                              <Text>
                                      {item.intitule}
                              </Text>
                              }
                              />
                  </View> */}
                  <Footer 
                     OpenHome={()=>this.openHome()}
                     OpenPlus={()=>this.openPlus()}
                     Opensearch={()=>this.openSearch()}
                  />
                  <Modal 
  transparent={true}
  animationType="slide"
  visible={this.state.edit}>
            <ScrollView
    style={{
      width:wp('100%'),
      height:hp('100%'),
      backgroundColor:'grey'
    }}>
            
            <ScrollView style={Styles.editModale}>
                      
                      <View >
                        <View
                              style={Styles.titleView}>
                                      <View
                                      style={Styles.colone}>
                                                <Text
                                                style={{
                                                  color:'#5C4DB1',
                                                  fontSize:14
                                                }}>
                                                  Edit
                                                </Text>
                                                <View
                                                style={{
                                                  borderWidth:1,
                                                  width:wp('9%'),
                                                  borderColor:'#DC4F89'
                                                }}/>
                                      </View>
                                      <Text
                                        style={{
                                          color:'#5C4DB1',
                                          fontWeight:'bold',
                                          marginLeft:wp('1%'),
                                          fontSize:14
                                        }}>
                                        Category
                                      </Text>
                      </View>
                      <Text
                      style={Styles.secondeTitle}>
                      Category
                      </Text>
                                <TextInput
                                ref={input => { this.textInput = input }}
                                // style={{backgroundColor:'white',fontSize:hp('2%'),width:wp('90%'),alignSelf:'center'}}
                                style={{backgroundColor:'white',fontSize:hp('2%'),width:wp('90%'),alignSelf:'center'}}
                                value={this.state.intitule}
                                multiline={true} 
                                onSubmitEditing={Keyboard.dismiss}
                                placeholder="Category"
                                onChangeText= {intitule=> this.setState({intitule})}
                                />
                                 
                      <Text
                      style={Styles.secondeTitle}>
                      Description
                      </Text>
                      <View style={{marginTop:hp('1%')}}>
                                <TextInput
                                ref={input => { this.textInput = input }}
                                style={{backgroundColor:'white',fontSize:hp('2%'),width:wp('90%'),alignSelf:'center'}}
                                multiline={true} 
                                value={this.state.description}
                                placeholder="Describe your category"
                                onChangeText= {description => this.setState({description})}
                                />
                      </View>
                      </View>
                      
                      <View  style={{flexDirection:'column'}}>
                                              <TouchableOpacity style={Add.rec}
                                               onPress={() =>{this.update(),this.setState({edit:false})}}
                                               >
                                                                                <Text style={Add.textRec}>
                                                                                                  SAVE
                                                                                </Text>
                                                  </TouchableOpacity> 
                                                  
                                                  <TouchableOpacity style={{ width:wp('90%'), height:hp('5%'),marginLeft:wp('5%'),borderRadius:30,alignItems:'center',marginTop:hp('1%'),justifyContent:'center',marginBottom:hp('5%')}}
                                                                                onPress={() => this.setState({edit:false})}>
                                                                                <Text style={{fontWeight: 'bold'}}>
                                                                                                  CANCEL
                                                                                </Text>
                                                  </TouchableOpacity>
                                                  </View>                        
                      </ScrollView>
            </ScrollView>
  </Modal>

  {/* Add */}
  <Modal 
  transparent={true}
  animationType="slide"
  visible={this.state.plus}>
    <TouchableOpacity
    onPress={()=>this.setState({plus:false})}
    style={{
      width:wp('100%'),
      height:hp('100%'),
      backgroundColor:'grey'
    }}>
            
            <View style={{backgroundColor:'#F4F6FC',height:hp('30%'),width:wp('60%'),marginTop:hp('60%'),alignSelf:'center'}}>
            <View
                       style={{
                         flexDirection:'column',
                         alignItems:'center'
                       }}
                       >  
                      
                              <TouchableOpacity 
                                          // style={styles.buttadd}
                                          style={
                                            {
                                              flexDirection:'row',
                                              alignItems:'center',
                                              paddingLeft:wp('5%'),
                                              // justifyContent:'left',
                                              backgroundColor:'white',
                                              height:hp('7%'),
                                              width:wp('55%'),
                                              margin:hp('1%'),
                                              borderRadius:20,
          
                                            }
                                              }
                                          onPress={() => this.setState({create:true})}>
                                          <Icon name={'md-create'} size={30} color={'#FF6C46'}
                                          style={styles.icone}
                                          />
                                          <Text style={styles.textMod}>
                                           new expression
                                          </Text> 
                              </TouchableOpacity> 
                              <TouchableOpacity 
                                 style={
                                  {
                                    flexDirection:'row',
                                    alignItems:'center',
                                    paddingLeft:wp('5%'),
                                    // justifyContent:'center',
                                    backgroundColor:'white',
                                    height:hp('7%'),
                                    width:wp('55%'),
                                    margin:hp('1%'),
                                    borderRadius:20,

                                  }
                                    }
                                  // style={styles.buttadd}
                                  onPress={() => this.setState({show1:true})}>
                                  <Icon name={'ios-mic'} size={30} color={'#FF6C46'}
                                 style={styles.icone}
                                  />
                                  <Text style={styles.textMod2}>
                                    Add new audio
                                  </Text>  
                              </TouchableOpacity> 
                              
                              <TouchableOpacity 
                                          // style={styles.buttadd}
                                          style={
                                            {
                                              flexDirection:'row',
                                              alignItems:'center',
                                              paddingLeft:wp('5%'),
                                              // justifyContent:'center',
                                              backgroundColor:'white',
                                              height:hp('7%'),
                                              width:wp('55%'),
                                              margin:hp('1%'),
                                              borderRadius:20,
          
                                            }
                                              }
                                              // this.props.navigation.navigate('camera')
                                          onPress={() => this.setState({videolang:true})}>
                                          <Icon name={'ios-camera'} size={30} color={'#FF6C46'}
                                          style={styles.icone}/> 
                                          <Text style={styles.textMod2}>
                                            Record video and picture
                                          </Text> 
                              </TouchableOpacity>
                              <View
                              style={{
                                width:wp('60%'),
                                height:hp('3.5%'),
                                backgroundColor:'grey',
                                flexDirection:'column',
                                alignItems:'center'
                              }}>
                               
                                <View
                                style={{
                                  width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 7,
      borderRightWidth: 7,
      borderBottomWidth: 15,
      // borderTopWidth:43,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      // borderTopColor:'red',
      borderBottomColor:"#F4F6FC",
      transform: [
          { rotate: '180deg' }
      ],
      }}/>
                                        


                              </View>
                             

  </View>
            </View>
            
      </TouchableOpacity>
      
      
    {/* </KeyboardAvoidingView> */}
      
  </Modal>
  {/* Add */}

  {/* create */}
  <Modal 
  transparent={true}
  animationType="slide"
  visible={this.state.create}>
    <ScrollView
    style={{
      width:wp('100%'),
      height:hp('100%'),
      backgroundColor:'grey'
    }}>
            
            <ScrollView style={{backgroundColor:'#F4F6FC',height:hp('90%'),width:wp('100%'),borderRadius:15,marginTop:hp('5%')}}>
                      <View>
                                <View
                              style={{
                                flexDirection:'row',
                                marginTop:hp('3%'),
                                marginBottom:hp('1%'),
                                marginLeft:wp('5%')
                              }}>
                                      <View
                                      style={{
                                        flexDirection:'column'
                                      }}>
                                                <Text
                                                style={{
                                                  color:'#5C4DB1',
                                                  fontSize:hp('2.8%')
                                                }}>
                                                  Add
                                                </Text>
                                                <View
                                                style={{
                                                  borderWidth:1,
                                                  width:wp('9%'),
                                                  borderColor:'#DC4F89'
                                                }}/>
                                      </View>
                                      <Text
                                        style={{
                                          color:'#5C4DB1',
                                          fontWeight:'bold',
                                          marginLeft:wp('1%'),
                                          fontSize:hp('2.8%')
                                        }}>
                                        new expression
                                      </Text>
                              </View>
                                          <Text
                                          style={{
                                            fontSize:hp('2%'),
                                            marginLeft:wp('5%'),
                                            marginTop:hp('2%'),
                                            opacity:0.5
                                          }}>
                                          Enter your new term
                                          </Text>
                                          <TextInput
                                          ref={input => { this.textInput = input }}
                                          style={{fontSize:hp('2%'),width:wp('90%'),marginLeft:wp('5%'),bottom:hp('2%')}}
                                          multiline={true} 
                                          // placeholderTextColor={'grey'}
                                          underlineColorAndroid='#5C4DB1'
                                          // placeholder="Enter your new term"
                                          onChangeText= {expres => this.setState({expres})}
                                          />
                                          <View
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                                    <Text
                                                    style={{
                                                      fontSize:hp('2%'),
                                                      marginLeft:wp('5%'),
                                                      // marginTop:hp('2%'),
                                                      opacity:0.5
                                                    }}>
                                                    Target language
                                                    </Text>
                                                    <View 
                                                            style={{
                                                              right:wp('5%'),
                                                              position:'absolute'
                                                            }}>
                                                                      <TouchableOpacity
                                                                      onPress={()=>this.setState({allang:!this.state.allang})}>
                                                                              {!this.state.allang?(<Text
                                                                              style={{
                                                                                fontSize:hp('2%'),
                                                                                opacity:0.5,
                                                                              
                                                                              }}>
                                                                                See all
                                                                              </Text>):(
                                                                              <Icon name={'ellipsis-horizontal-outline'} size={25} color={'black'}/>)}
                                                                      </TouchableOpacity>
                                                  </View>
                                        </View>
                                         
                                          <View  style={{fontSize:hp('3.2%'),fontWeight: 'bold',borderColor:'grey',height:hp('73%')}}>
                                          
                                          {/* <View style={{borderWidth:1,borderRadius:30,backgroundColor:'#EFF4F5',height:hp('5%'),width:wp('90%'),marginLeft:wp('5%'),marginTop:hp('2%')}}>
                                                    <Picker
                                                    style={{fontWeight:'bold',bottom:hp('2%')}}
                                                    mode='dropdown'
                                                    selectedValue={this.state.picIdlangue}
                                                    onValueChange={(itemValue, itemIndex) =>this.handleTranslate(itemValue)} >
                                                    <Picker.Item label={'Select language'} value=""/>
                                                    { this.state.dataSource.map((item, key)=>(
                                                    <Picker.Item label={item.intitule} value={item.abrev}  key={key} />)
                                                    )}
                                                    </Picker>
                                          </View> */}
                                          <View style={{
                                            // backgroundColor:'red',
                                            justifyContent:'center'
                                          }}>
                                          { !this.state.allang?(
                                                <View
                                                style={{
                                                  marginVertical:hp('1%'),
                                                  marginLeft:wp('5%'),
                                                }}>
                                                  <FlatList
                                                    data={this.state.dataSource}
                                                    extraData={this.state}
                                                    keyExtractor={(item)=>item.id}
                                                    refreshing={this.state.refreshing}
                                                    horizontal={true}
                                                    // numColumns={3}
                                                    onRefresh={this.handleRefresh}
                                                    enableEmptySections={true}
                                                    renderSeparator= {this.ListViewItemSeparator}
                                                    renderItem={({item,index})=>
                                                            <View style={{flexDirection:'column',justifyContent:'center',marginRight:wp('2%'),height:hp('7.2%'),
                                                            paddingBottom:hp('1%')}}>
                                                                      {this.LangView(item.id,item.intitule,index,item.abrev)}
                                                            </View>
                                            }
                                                    />
                                                      


                                          </View>):
                                          (
                                            <View>
                                                    <View
                                                    style={{
                                                      // marginVertical:hp('1%'),
                                                      marginLeft:wp('5%')
                                                    }}>
                                                            <FlatList
                                                                    data={this.state.dataSource}
                                                                    extraData={this.state}
                                                                    keyExtractor={(item)=>item.id}
                                                                    refreshing={this.state.refreshing}
                                                                    horizontal={false}
                                                                    numColumns={4}
                                                                    onRefresh={this.handleRefresh}
                                                                    enableEmptySections={false}
                                                                    renderSeparator= {this.ListViewItemSeparator}
                                                                    renderItem={({item,index})=>
                                                                            <View style={{flexDirection:'column',justifyContent:'space-evenly',height:hp('7.2%'),
                                                                            paddingBottom:hp('0.6%'),marginRight:wp('2%')
                                                                            }}>
                                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                                            </View>
                                                            }
                                                            />
                                                    </View>
                                            </View>
                                            )}
                                          </View>
                                          <Text
                                          style={{
                                            fontSize:hp('2%'),
                                            marginLeft:wp('5%'),
                                            marginTop:hp('1%'),
                                            opacity:0.5
                                          }}>
                                          Enter your translated term
                                          </Text>
                                          
                                          <View style={{}}>
                                                    <TextInput
                                                    ref={input => { this.textInput = input }}
                                                    style={{fontSize:hp('2%'),width:wp('90%'),marginLeft:wp('5%'),bottom:hp('2%')}}
                                                    placeholderTextColor={'grey'}
                                                    multiline={true} 
                                                    // onFocus={()=>setenableShift(false)}
                                                    value={this.state.targTEXT}
                                                    underlineColorAndroid='#5C4DB1'
                                                    onChangeText= {targTEXT => this.setState({targTEXT})}
                                                    />
                                          </View>
                                          {/* <View style={{borderWidth:1,borderRadius:30,backgroundColor:'#EFF4F5',height:hp('5%'),width:wp('90%'),marginLeft:wp('5%')}}>
                                                    <Picker
                                                    style={{fontWeight:'bold',bottom:hp('2%')}}
                                                    mode='dropdown'
                                                    selectedValue={this.state.pic}
                                                    onValueChange={(itemValue, itemIndex) => this.setState({pic: itemValue})}
                                                    >
                                                    <Picker.Item label={'Select category'} value=""/>
                                                    { this.state.cat.map((item, key)=>(
                                                    <Picker.Item label={item.intitule} value={item.id}  key={key} />)
                                                    )}
                                                    </Picker>
                                          </View> */}
                                          <View
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                                  <Text
                                                  style={{
                                                    fontSize:hp('2%'),
                                                    opacity:0.5,
                                                    marginLeft:wp('5%')
                                                  }}>
                                                    Category (Optional)
                                                  </Text>
                                                  <View 
                                                  style={{
                                                    right:wp('5%'),
                                                    position:'absolute'
                                                  }}>
                                                            <TouchableOpacity
                                                            onPress={()=>this.setState({all:!this.state.all})}>
                                                                    {!this.state.all?(<Text
                                                                    style={{
                                                                      fontSize:hp('2%'),
                                                                      opacity:0.5,
                                                                    
                                                                    }}>
                                                                      See all
                                                                    </Text>):(
                                                                    <Icon name={'ellipsis-horizontal-outline'} size={25} color={'black'}/>)}
                                                            </TouchableOpacity>
                                                  </View>
                                          </View>
                                          <View style={{
                                            // backgroundColor:'red',
                                            justifyContent:'center'
                                          }}>
                                          { !this.state.all?(
                                                <View
                                                style={{
                                                  marginVertical:hp('1%'),
                                                  marginLeft:wp('5%'),
                                                }}>
                                                  <FlatList
                                                    data={this.state.cat}
                                                    extraData={this.state}
                                                    keyExtractor={(item)=>item.id}
                                                    refreshing={this.state.refreshing}
                                                    horizontal={true}
                                                    // numColumns={3}
                                                    onRefresh={this.handleRefresh}
                                                    enableEmptySections={true}
                                                    renderSeparator= {this.ListViewItemSeparator}
                                                    renderItem={({item,index})=>
                                                            <View style={{flexDirection:'column',justifyContent:'center',marginRight:wp('2%'),height:hp('7.2%'),
                                                            paddingBottom:hp('1%')}}>
                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                            </View>
                                            }
                                                    />
                                                      


                                          </View>):
                                          (
                                            <View>
                                                    <View
                                                    style={{
                                                      // marginVertical:hp('1%'),
                                                      marginLeft:wp('5%')
                                                    }}>
                                                            <FlatList
                                                                    data={this.state.cat}
                                                                    extraData={this.state}
                                                                    keyExtractor={(item)=>item.id}
                                                                    refreshing={this.state.refreshing}
                                                                    horizontal={false}
                                                                    numColumns={3}
                                                                    onRefresh={this.handleRefresh}
                                                                    enableEmptySections={false}
                                                                    renderSeparator= {this.ListViewItemSeparator}
                                                                    renderItem={({item,index})=>
                                                                            <View style={{flexDirection:'column',justifyContent:'center',height:hp('7.2%'),
                                                                            paddingBottom:hp('0.6%')
                                                                            }}>
                                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                                            </View>
                                                            }
                                                            />
                                                    </View>
                                            </View>
                                            )}
                                          </View>

                                          {this.state.addcat?(
                                                <View
                                                style={{
                                                  borderWidth:0.5,
                                                  borderRadius:20,
                                                  backgroundColor:'#DBDDDC',
                                                  width:wp('25tf%'),
                                                  justifyContent:'center',
                                                  alignItems:'center',
                                                  height:hp('4.5%'),
                                                  marginLeft:wp('5%')
                                                }}>
                                                  <TouchableOpacity
                                                  onPress={()=>this.setState({addcat:false})}>
                                                        <Text>
                                                          + Add New
                                                        </Text>
                                                  </TouchableOpacity>
                                                </View>
                                          ):(<View 
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                            
                                                <View
                                                >
                                                   <TextInput 
                                                      style={{
                                                        fontSize:hp('2%'),height:hp('5.5%'),
                                                        width:wp('70%'),
                                                        borderWidth:0.2,
                                                        marginLeft:wp('5%'),
                                                        backgroundColor:'#E4E6E5',
                                                        borderRadius:20,
                                                        paddingLeft:wp('5%'),
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                      }}
                                                      underlineColorAndroid='transparent'
                                                      onChangeText= {categ => this.setState({categ})}
                                                      placeholder="Enter your new category name"

                                                      />

                                                </View>
                                            
                                                <View
                                                 style={{
                                                  height:hp('5.5%'),
                                                  width:wp('17.5%'),
                                                  marginLeft:wp('2.5%'),
                                                  borderRadius:20,
                                                  backgroundColor:'#5C4DB1',
                                                  alignItems:'center',
                                                  justifyContent:'center'
                                                }}>
                                                  <TouchableOpacity
                                                  disabled={this.state.categ ==''}
                                                  onPress={()=>{this.setState({addcat:true}),this.saveCat()}}>
                                                  <Text
                                                  style={{
                                                    color:'white',
                                                    fontSize:hp('2.5%'),
                                                    textAlign:'center'
                                                  }}>
                                                    Add
                                                  </Text>
                                                  </TouchableOpacity>

                                                </View>
                                          </View>)}
                                          <View  style={{flexDirection:'column'}}>
                                          <TouchableOpacity style={{marginLeft:wp('5%'),width:wp('90%'), height:hp('5%'),backgroundColor:'#DC4F89',borderRadius:30,alignItems:'center',marginTop:hp('2%'),justifyContent:'center'}}
                                          disabled={this.state.expres ==''}
                                          onPress={() =>{this.picId(this.state.picIdlangue),this.saveTEXT(),this.setState({create:false,idLan:'',idecat:'',addcat:true})}}
                                          >
                                                    <Text style={{color:'white',fontWeight: 'bold'}}>
                                                                      CONFIRM
                                                    </Text>
                                          </TouchableOpacity>
                                          <TouchableOpacity style={{ width:wp('90%'), height:hp('5%'),marginLeft:wp('5%'),borderRadius:30,alignItems:'center',marginTop:hp('1%'),justifyContent:'center'}}
                                                    onPress={() => this.setState({create:false,idecat:'',idLan:'',expres:'',targTEXT:'',all:false,addcat:true})}>
                                                    <Text style={{fontWeight: 'bold'}}>
                                                                      CANCEL
                                                    </Text>
                                          </TouchableOpacity> 
                                          </View>
                                </View> 
                      </View>
            </ScrollView>
            
      </ScrollView>
      
  </Modal>
  {/* create */}

  {/* Audio */}
  <Modal 
  transparent={true}
  animationType="slide"
  visible={this.state.show1}>
            {/* <View style={{backgroundColor:'#cce7e8',position: 'absolute', top:hp('20'), left:wp('10%'), right:wp('10%'),alignItems: 'center',with:wp('80%'),height:hp('24%'),flex:1,borderRadius:15,borderColor:'#2f3c7e'}}>
                        <View style={{backgroundColor:'#2f3c7e',height:hp('5%'),width:wp('80%'),borderTopEndRadius:15,borderTopStartRadius:15}}>
                            <Text style={{fontSize:hp('2.5%'),color:'white',textAlign:'center'}}>
                                      Please choose your recording language
                            </Text>
                        </View> 
                        <View  style={{fontSize:hp('3.2%'),borderRadius:30,borderWidth:2,width:wp('60%'),height:hp('5%'),borderColor:'grey',backgroundColor:'#EFF4F5',top:hp('3%'),justifyContent:'center'}}>
                            <Picker
                            mode='dropdown'
                            selectedValue={this.state.PickerValueHolder}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
                            <Picker.Item label={'Select language'} value=""/>
                            { this.state.dataSource.map((item, key)=>(
                            <Picker.Item label={item.intitule} value={item.abrev}  key={key} />)
                            )}
                            </Picker>
                        </View> 
                        <View  style={{ top:hp('6%'),flexDirection:'row', alignItems:'flex-end',}}>
                            <TouchableOpacity style={{ width:wp('15%'), height:hp('4.5%'),backgroundColor:'red',borderRadius:5,alignItems:'center'}}
                            onPress={() => this.setState({show1:false})}>
                            <Text style={{color:'white'}}>
                                              Cancel
                            </Text>
                            </TouchableOpacity> 
                        <TouchableOpacity style={{width:wp('15%'), height:hp('4.5%'),marginLeft:wp('15%'),backgroundColor:'blue',borderRadius:5,alignItems:'center',}}
                        onPress={() =>{this.setState({show1:false,addnew:false}),this.ecouter()}}>
                            <Text style={{color:'white'}}>

                                              Record
                            </Text>
                        </TouchableOpacity>
                        </View>
            </View> */}
<ScrollView
    style={{
      width:wp('100%'),
      height:hp('100%'),
      backgroundColor:'grey'
    }}>
            
            <ScrollView style={{backgroundColor:'#F4F6FC',height:hp('60%'),width:wp('100%'),borderRadius:15,marginTop:hp('25%')}}>
                      <View>
                                <View
                              style={{
                                flexDirection:'row',
                                marginTop:hp('3%'),
                                marginBottom:hp('1%'),
                                marginLeft:wp('5%')
                              }}>
                                      <View
                                      style={{
                                        flexDirection:'column'
                                      }}>
                                                <Text
                                                style={{
                                                  color:'#5C4DB1',
                                                  fontSize:hp('2.8%')
                                                }}>
                                                  Record
                                                </Text>
                                                <View
                                                style={{
                                                  borderWidth:1,
                                                  width:wp('9%'),
                                                  borderColor:'#DC4F89'
                                                }}/>
                                      </View>
                                      <Text
                                        style={{
                                          color:'#5C4DB1',
                                          fontWeight:'bold',
                                          marginLeft:wp('1%'),
                                          fontSize:hp('2.8%')
                                        }}>
                                        audio
                                      </Text>
                              </View>
                                         
                                          <View
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                                    <Text
                                                    style={{
                                                      fontSize:hp('2%'),
                                                      marginLeft:wp('5%'),
                                                      // marginTop:hp('2%'),
                                                      opacity:0.5
                                                    }}>
                                                    Your recording language
                                                    </Text>
                                                    <View 
                                                            style={{
                                                              right:wp('5%'),
                                                              position:'absolute'
                                                            }}>
                                                                      <TouchableOpacity
                                                                      onPress={()=>this.setState({allang:!this.state.allang})}>
                                                                              {!this.state.allang?(<Text
                                                                              style={{
                                                                                fontSize:hp('2%'),
                                                                                opacity:0.5,
                                                                              
                                                                              }}>
                                                                                See all
                                                                              </Text>):(
                                                                              <Icon name={'ellipsis-horizontal-outline'} size={25} color={'black'}/>)}
                                                                      </TouchableOpacity>
                                                  </View>
                                        </View>
                                         
                                        <View  style={{fontSize:hp('3.2%'),fontWeight: 'bold',borderColor:'grey'}}>
                                       
                                          <View style={{
                                            // backgroundColor:'red',
                                            justifyContent:'center'
                                          }}>
                                          { !this.state.allang?(
                                                <View
                                                style={{
                                                  marginVertical:hp('1%'),
                                                  marginLeft:wp('5%'),
                                                }}>
                                                  <FlatList
                                                    data={this.state.dataSource}
                                                    extraData={this.state}
                                                    keyExtractor={(item)=>item.id}
                                                    refreshing={this.state.refreshing}
                                                    horizontal={true}
                                                    // numColumns={3}
                                                    onRefresh={this.handleRefresh}
                                                    enableEmptySections={true}
                                                    renderSeparator= {this.ListViewItemSeparator}
                                                    renderItem={({item,index})=>
                                                            <View style={{flexDirection:'column',justifyContent:'center',marginRight:wp('2%'),height:hp('7.2%'),
                                                            paddingBottom:hp('1%')}}>
                                                                      {this.LangaudioView(item.id,item.intitule,index,item.abrev)}
                                                            </View>
                                            }
                                                    />
                                                      


                                          </View>):
                                          (
                                            <View>
                                                    <View
                                                    style={{
                                                      // marginVertical:hp('1%'),
                                                      marginLeft:wp('5%')
                                                    }}>
                                                            <FlatList
                                                                    data={this.state.dataSource}
                                                                    extraData={this.state}
                                                                    keyExtractor={(item)=>item.id}
                                                                    refreshing={this.state.refreshing}
                                                                    horizontal={false}
                                                                    numColumns={4}
                                                                    onRefresh={this.handleRefresh}
                                                                    enableEmptySections={false}
                                                                    renderSeparator= {this.ListViewItemSeparator}
                                                                    renderItem={({item,index})=>
                                                                            <View style={{flexDirection:'column',justifyContent:'space-evenly',height:hp('7.2%'),
                                                                            paddingBottom:hp('0.6%'),marginRight:wp('2%')
                                                                            }}>
                                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                                            </View>
                                                            }
                                                            />
                                                    </View>
                                            </View>
                                            )}
                                          </View>
                                          <View
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                                  <Text
                                                  style={{
                                                    fontSize:hp('2%'),
                                                    opacity:0.5,
                                                    marginLeft:wp('5%')
                                                  }}>
                                                    Category (Optional)
                                                  </Text>
                                                  <View 
                                                  style={{
                                                    right:wp('5%'),
                                                    position:'absolute'
                                                  }}>
                                                            <TouchableOpacity
                                                            onPress={()=>this.setState({all:!this.state.all})}>
                                                                    {!this.state.all?(<Text
                                                                    style={{
                                                                      fontSize:hp('2%'),
                                                                      opacity:0.5,
                                                                    
                                                                    }}>
                                                                      See all
                                                                    </Text>):(
                                                                    <Icon name={'ellipsis-horizontal-outline'} size={25} color={'black'}/>)}
                                                            </TouchableOpacity>
                                                  </View>
                                          </View>
                                          <View style={{
                                            // backgroundColor:'red',
                                            justifyContent:'center'
                                          }}>
                                          { !this.state.all?(
                                                <View
                                                style={{
                                                  marginVertical:hp('1%'),
                                                  marginLeft:wp('5%'),
                                                }}>
                                                  <FlatList
                                                    data={this.state.cat}
                                                    extraData={this.state}
                                                    keyExtractor={(item)=>item.id}
                                                    refreshing={this.state.refreshing}
                                                    horizontal={true}
                                                    // numColumns={3}
                                                    onRefresh={this.handleRefresh}
                                                    enableEmptySections={true}
                                                    renderSeparator= {this.ListViewItemSeparator}
                                                    renderItem={({item,index})=>
                                                            <View style={{flexDirection:'column',justifyContent:'center',marginRight:wp('2%'),height:hp('7.2%'),
                                                            paddingBottom:hp('1%')}}>
                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                            </View>
                                            }
                                                    />
                                                      


                                          </View>):
                                          (
                                            <View>
                                                    <View
                                                    style={{
                                                      // marginVertical:hp('1%'),
                                                      marginLeft:wp('5%')
                                                    }}>
                                                            <FlatList
                                                                    data={this.state.cat}
                                                                    extraData={this.state}
                                                                    keyExtractor={(item)=>item.id}
                                                                    refreshing={this.state.refreshing}
                                                                    horizontal={false}
                                                                    numColumns={3}
                                                                    onRefresh={this.handleRefresh}
                                                                    enableEmptySections={false}
                                                                    renderSeparator= {this.ListViewItemSeparator}
                                                                    renderItem={({item,index})=>
                                                                            <View style={{flexDirection:'column',justifyContent:'center',height:hp('7.2%'),
                                                                            paddingBottom:hp('0.6%')
                                                                            }}>
                                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                                            </View>
                                                            }
                                                            />
                                                    </View>
                                            </View>
                                            )}
                                          </View>

                                          {this.state.addcat?(
                                                <View
                                                style={{
                                                  borderWidth:0.5,
                                                  borderRadius:20,
                                                  backgroundColor:'#DBDDDC',
                                                  width:wp('25tf%'),
                                                  justifyContent:'center',
                                                  alignItems:'center',
                                                  height:hp('4.5%'),
                                                  marginLeft:wp('5%')
                                                }}>
                                                  <TouchableOpacity
                                                  onPress={()=>this.setState({addcat:false})}>
                                                        <Text>
                                                          + Add New
                                                        </Text>
                                                  </TouchableOpacity>
                                                </View>
                                          ):(<View 
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                            
                                                <View>
                                                   <TextInput 
                                                      style={{
                                                        fontSize:hp('2%'),height:hp('5.5%'),
                                                        width:wp('70%'),
                                                        borderWidth:0.2,
                                                        marginLeft:wp('5%'),
                                                        backgroundColor:'#E4E6E5',
                                                        borderRadius:20,
                                                        paddingLeft:wp('5%'),
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                      }}
                                                      underlineColorAndroid='transparent'
                                                      onChangeText= {categ => this.setState({categ})}
                                                      placeholder="Enter your new category name"

                                                      />

                                                </View>
                                            
                                                <View
                                                 style={{
                                                  height:hp('5.5%'),
                                                  width:wp('17.5%'),
                                                  marginLeft:wp('2.5%'),
                                                  borderRadius:20,
                                                  backgroundColor:'#5C4DB1',
                                                  alignItems:'center',
                                                  justifyContent:'center'
                                                }}>
                                                  <TouchableOpacity
                                                  disabled={this.state.categ ==''}
                                                  onPress={()=>{this.setState({addcat:true}),this.saveCat()}}>
                                                  <Text
                                                  style={{
                                                    color:'white',
                                                    fontSize:hp('2.5%'),
                                                    textAlign:'center'
                                                  }}>
                                                    Add
                                                  </Text>
                                                  </TouchableOpacity>

                                                </View>
                                          </View>)}
                                          <View  style={{flexDirection:'column'}}>
                                                 <TouchableOpacity style={Add.rec}
                                                 disabled={this.state.pickerValueHolder ==''}
                                                 onPress={() =>{this.setState({show1:false,addnew:false,plus:false}),this.ecouter()}}
                                                                      // onPress={() =>alert('record audio')}
                                                                      >
                                                                                <Text style={Add.textRec}>
                                                                                                  RECORD AUDIO
                                                                                </Text>
                                                  </TouchableOpacity> 
                                                  <TouchableOpacity style={Add.real}
                                                  onPress={() =>alert('real-time Transcription')}
                                                  >
                                                    <Text style={Add.textReal}>
                                                                      REAL-TIME TRANSCRIPTION
                                                    </Text>
                                                  </TouchableOpacity> 
                                                  <TouchableOpacity style={{ width:wp('90%'), height:hp('5%'),marginLeft:wp('5%'),borderRadius:30,alignItems:'center',marginTop:hp('1%'),justifyContent:'center',marginBottom:hp('5%')}}
                                                                                onPress={() => this.setState({show1:false,idecat:'',idLan:'',expres:'',targTEXT:'',all:false,addcat:true,pickerValueHolder:''})}>
                                                                                <Text style={{fontWeight: 'bold'}}>
                                                                                                  CANCEL
                                                                                </Text>
                                                  </TouchableOpacity>
                                                  </View>
                                </View> 
                      </View>
            </ScrollView>
            
      </ScrollView>
  </Modal>
  {/* Audio */}

  {/* VIDEO */}
  <Modal 
  transparent={true}
  animationType="slide"
  visible={this.state.videolang}>
            {/* <View style={{backgroundColor:'#cce7e8',position: 'absolute', top:hp('20%'), left:wp('10%'), right:wp('10%'),alignItems: 'center',with:wp('80%'),height:hp('24%'),flex:1,borderRadius:15,borderColor:'#2f3c7e'}}>
                        <View style={{backgroundColor:'#2f3c7e',height:hp('5%'),width:wp('80%'),borderTopEndRadius:15,borderTopStartRadius:15}}>
                            <Text style={{fontSize:hp('2.5%'),color:'white',textAlign:'center'}}>
                                      Please choose your language
                            </Text>
                        </View> 
                        <View  style={{fontSize:hp('3.2%'),borderRadius:30,borderWidth:2,width:wp('60%'),height:hp('5%'),borderColor:'grey',backgroundColor:'#EFF4F5',top:hp('3%')}}
                        >
                            <Picker
                            style={{bottom:hp('2%')}}
                            mode='dropdown'
                            selectedValue={this.state.PickerValueHolder}
                            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
                            <Picker.Item label={'Select language'} value=""/>
                            { this.state.dataSource.map((item, key)=>(
                            <Picker.Item label={item.intitule} value={item.abrev}  key={key} />)
                            )}
                            </Picker> */}
                        {/* ***SIMPLE PICKER*** */}
                          {/* <Picker         
                        mode='dropdown'
                        //  prompt='         Select a language'
                        style={{alignItems:'center'}}
                        selectedValue={this.state.language}
                        onValueChange={(itemValue,itemIndex)=>this.setState({language:itemValue})}
                        >
                        <Picker.Item label="Français" value="frs"/>
                        <Picker.Item label="Anglais" value="ang"/>
                        <Picker.Item label="Espagnol" value="espa"/>
                        </Picker> */}
                        {/* *** SIMPLE PICKER*** */}
                        {/* </View> 
                        <View  style={{ top:70,flexDirection:'row', alignItems:'flex-end'}}>
                            <TouchableOpacity style={{ width:wp('15%'), height:hp('4.5%'),backgroundColor:'red',borderRadius:5,alignItems:'center',bottom:hp('7%')}}
                            onPress={() => this.setState({videolang:false})}>
                                  <Text style={{color:'white',fontWeight: 'bold'}}>
                                                    Cancel
                                  </Text>
                            </TouchableOpacity> 
                            <TouchableOpacity style={{width:wp('15%'), height:hp('4.5%'),marginLeft:wp('25%'),backgroundColor:'blue',borderRadius:5,alignItems:'center',bottom:hp('7%')}}
                            onPress={() =>{this.cnc2 (),this.gocam()}}>
                                  <Text style={{color:'white',fontWeight: 'bold'}}>
                                                    Go
                                  </Text>
                            </TouchableOpacity>
                        </View>
            </View> */}
            <ScrollView
    style={{
      width:wp('100%'),
      height:hp('100%'),
      backgroundColor:'grey'
    }}>
            
            <ScrollView style={{backgroundColor:'#F4F6FC',height:hp('60%'),width:wp('100%'),borderRadius:15,marginTop:hp('25%')}}>
                      <View>
                                <View
                              style={{
                                flexDirection:'row',
                                marginTop:hp('3%'),
                                marginBottom:hp('1%'),
                                marginLeft:wp('5%')
                              }}>
                                      <View
                                      style={{
                                        flexDirection:'column'
                                      }}>
                                                <Text
                                                style={{
                                                  color:'#5C4DB1',
                                                  fontSize:hp('2.8%')
                                                }}>
                                                  Record
                                                </Text>
                                                <View
                                                style={{
                                                  borderWidth:1,
                                                  borderColor:'#DC4F89'
                                                }}/>
                                      </View>
                                      <Text
                                        style={{
                                          color:'#5C4DB1',
                                          fontWeight:'bold',
                                          marginLeft:wp('1%'),
                                          fontSize:hp('2.8%')
                                        }}>
                                        video and picture
                                      </Text>
                              </View>
                                         
                                          <View
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                                    <Text
                                                    style={{
                                                      fontSize:hp('2%'),
                                                      marginLeft:wp('5%'),
                                                      // marginTop:hp('2%'),
                                                      opacity:0.5
                                                    }}>
                                                    Your recording language
                                                    </Text>
                                                    <View 
                                                            style={{
                                                              right:wp('5%'),
                                                              position:'absolute'
                                                            }}>
                                                                      <TouchableOpacity
                                                                      onPress={()=>this.setState({allang:!this.state.allang})}>
                                                                              {!this.state.allang?(<Text
                                                                              style={{
                                                                                fontSize:hp('2%'),
                                                                                opacity:0.5,
                                                                              
                                                                              }}>
                                                                                See all
                                                                              </Text>):(
                                                                              <Icon name={'ellipsis-horizontal-outline'} size={25} color={'black'}/>)}
                                                                      </TouchableOpacity>
                                                  </View>
                                        </View>
                                         
                                        <View  style={{fontSize:hp('3.2%'),fontWeight: 'bold',borderColor:'grey'}}>
                                       
                                          <View style={{
                                            // backgroundColor:'red',
                                            justifyContent:'center'
                                          }}>
                                          { !this.state.allang?(
                                                <View
                                                style={{
                                                  marginVertical:hp('1%'),
                                                  marginLeft:wp('5%'),
                                                }}>
                                                  <FlatList
                                                    data={this.state.dataSource}
                                                    extraData={this.state}
                                                    keyExtractor={(item)=>item.id}
                                                    refreshing={this.state.refreshing}
                                                    horizontal={true}
                                                    // numColumns={3}
                                                    onRefresh={this.handleRefresh}
                                                    enableEmptySections={true}
                                                    renderSeparator= {this.ListViewItemSeparator}
                                                    renderItem={({item,index})=>
                                                            <View style={{flexDirection:'column',justifyContent:'center',marginRight:wp('2%'),height:hp('7.2%'),
                                                            paddingBottom:hp('1%')}}>
                                                                      {this.LangaudioView(item.id,item.intitule,index,item.abrev)}
                                                            </View>
                                            }
                                                    />
                                                      


                                          </View>):
                                          (
                                            <View>
                                                    <View
                                                    style={{
                                                      // marginVertical:hp('1%'),
                                                      marginLeft:wp('5%')
                                                    }}>
                                                            <FlatList
                                                                    data={this.state.dataSource}
                                                                    extraData={this.state}
                                                                    keyExtractor={(item)=>item.id}
                                                                    refreshing={this.state.refreshing}
                                                                    horizontal={false}
                                                                    numColumns={4}
                                                                    onRefresh={this.handleRefresh}
                                                                    enableEmptySections={false}
                                                                    renderSeparator= {this.ListViewItemSeparator}
                                                                    renderItem={({item,index})=>
                                                                            <View style={{flexDirection:'column',justifyContent:'space-evenly',height:hp('7.2%'),
                                                                            paddingBottom:hp('0.6%'),marginRight:wp('2%')
                                                                            }}>
                                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                                            </View>
                                                            }
                                                            />
                                                    </View>
                                            </View>
                                            )}
                                          </View>
                                          <View
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                                  <Text
                                                  style={{
                                                    fontSize:hp('2%'),
                                                    opacity:0.5,
                                                    marginLeft:wp('5%')
                                                  }}>
                                                    Category (Optional)
                                                  </Text>
                                                  <View 
                                                  style={{
                                                    right:wp('5%'),
                                                    position:'absolute'
                                                  }}>
                                                            <TouchableOpacity
                                                            onPress={()=>this.setState({all:!this.state.all})}>
                                                                    {!this.state.all?(<Text
                                                                    style={{
                                                                      fontSize:hp('2%'),
                                                                      opacity:0.5,
                                                                    
                                                                    }}>
                                                                      See all
                                                                    </Text>):(
                                                                    <Icon name={'ellipsis-horizontal-outline'} size={25} color={'black'}/>)}
                                                            </TouchableOpacity>
                                                  </View>
                                          </View>
                                          <View style={{
                                            // backgroundColor:'red',
                                            justifyContent:'center'
                                          }}>
                                          { !this.state.all?(
                                                <View
                                                style={{
                                                  marginVertical:hp('1%'),
                                                  marginLeft:wp('5%'),
                                                }}>
                                                  <FlatList
                                                    data={this.state.cat}
                                                    extraData={this.state}
                                                    keyExtractor={(item)=>item.id}
                                                    refreshing={this.state.refreshing}
                                                    horizontal={true}
                                                    // numColumns={3}
                                                    onRefresh={this.handleRefresh}
                                                    enableEmptySections={true}
                                                    renderSeparator= {this.ListViewItemSeparator}
                                                    renderItem={({item,index})=>
                                                            <View style={{flexDirection:'column',justifyContent:'center',marginRight:wp('2%'),height:hp('7.2%'),
                                                            paddingBottom:hp('1%')}}>
                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                            </View>
                                            }
                                                    />
                                                      


                                          </View>):
                                          (
                                            <View>
                                                    <View
                                                    style={{
                                                      // marginVertical:hp('1%'),
                                                      marginLeft:wp('5%')
                                                    }}>
                                                            <FlatList
                                                                    data={this.state.cat}
                                                                    extraData={this.state}
                                                                    keyExtractor={(item)=>item.id}
                                                                    refreshing={this.state.refreshing}
                                                                    horizontal={false}
                                                                    numColumns={3}
                                                                    onRefresh={this.handleRefresh}
                                                                    enableEmptySections={false}
                                                                    renderSeparator= {this.ListViewItemSeparator}
                                                                    renderItem={({item,index})=>
                                                                            <View style={{flexDirection:'column',justifyContent:'center',height:hp('7.2%'),
                                                                            paddingBottom:hp('0.6%')
                                                                            }}>
                                                                                      {this.categoryView(item.id,item.intitule,index)}
                                                                            </View>
                                                            }
                                                            />
                                                    </View>
                                            </View>
                                            )}
                                          </View>

                                          {this.state.addcat?(
                                                <View
                                                style={{
                                                  borderWidth:0.5,
                                                  borderRadius:20,
                                                  backgroundColor:'#DBDDDC',
                                                  width:wp('25tf%'),
                                                  justifyContent:'center',
                                                  alignItems:'center',
                                                  height:hp('4.5%'),
                                                  marginLeft:wp('5%')
                                                }}>
                                                  <TouchableOpacity
                                                  onPress={()=>this.setState({addcat:false})}>
                                                        <Text>
                                                          + Add New
                                                        </Text>
                                                  </TouchableOpacity>
                                                </View>
                                          ):(<View 
                                          style={{
                                            flexDirection:'row'
                                          }}>
                                            
                                                <View>
                                                   <TextInput 
                                                      style={{
                                                        fontSize:hp('2%'),height:hp('5.5%'),
                                                        width:wp('70%'),
                                                        borderWidth:0.2,
                                                        marginLeft:wp('5%'),
                                                        backgroundColor:'#E4E6E5',
                                                        borderRadius:20,
                                                        paddingLeft:wp('5%'),
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                      }}
                                                      underlineColorAndroid='transparent'
                                                      onChangeText= {categ => this.setState({categ})}
                                                      placeholder="Enter your new category name"

                                                      />

                                                </View>
                                            
                                                <View
                                                 style={{
                                                  height:hp('5.5%'),
                                                  width:wp('17.5%'),
                                                  marginLeft:wp('2.5%'),
                                                  borderRadius:20,
                                                  backgroundColor:'#5C4DB1',
                                                  alignItems:'center',
                                                  justifyContent:'center'
                                                }}>
                                                  <TouchableOpacity
                                                  disabled={this.state.categ ==''}
                                                  onPress={()=>{this.setState({addcat:true}),this.saveCat()}}>
                                                  <Text
                                                  style={{
                                                    color:'white',
                                                    fontSize:hp('2.5%'),
                                                    textAlign:'center'
                                                  }}>
                                                    Add
                                                  </Text>
                                                  </TouchableOpacity>

                                                </View>
                                          </View>)}
                                          <View  style={{flexDirection:'column'}}>
                                                 <TouchableOpacity style={Add.rec}
                                                 disabled={this.state.pickerValueHolder ==''}
                                                 onPress={() =>{this.cnc2(),this.gocam()}}
                                                                      // onPress={() =>alert('record audio')}
                                                                      >
                                                                                <Text style={Add.textRec}>
                                                                                                  RECORD 
                                                                                </Text>
                                                  </TouchableOpacity> 
                                                 
                                                  <TouchableOpacity style={{ width:wp('90%'), height:hp('5%'),marginLeft:wp('5%'),borderRadius:30,alignItems:'center',marginTop:hp('1%'),justifyContent:'center',marginBottom:hp('5%')}}
                                                                                onPress={() => this.setState({videolang:false,idecat:'',idLan:'',expres:'',targTEXT:'',all:false,addcat:true,pickerValueHolder:''})}>
                                                                                <Text style={{fontWeight: 'bold'}}>
                                                                                                  CANCEL
                                                                                </Text>
                                                  </TouchableOpacity>
                                                  </View>
                                </View> 
                      </View>
            </ScrollView>
            
      </ScrollView>
            
  </Modal>
  {/* VIDEO */}

  {/* category search */}
  <Modal 
  transparent={true}
  animationType="fade"
  visible={this.state.categorySearch}
  onShow={() => { this.searchInput3.focus(); }}
  >
        <View
        style={{
          width:wp('100%'),
          height:hp('100%'),
          backgroundColor:'grey'
        }}>
                  {/* SEARCH */}
                  <View style={{
                      borderWidth:0.2,
                      width:wp('80%'),
                      height:hp('6%'),
                      borderRadius:30,
                      justifyContent:'center',
                      backgroundColor:'white',
                      alignSelf:'center',
                      marginTop:hp('5%'),
                      marginBottom:hp('5%')
                      }}>
                                              
                                              <TextInput
                                              placeholder="search for expressions ..."
                                              style={{fontSize:hp('2%'),textAlign:'center'}}
                                              ref={(input) => { this.searchInput3 = input; }}
                                              onChangeText={text => this.searchFilterFunction(text)}
                                              autoCorrect={false}
                                              value={this.state.value}
                                              onSubmitEditing={()=>this.setState({iconHeader:false,categorySearch:false,more:true})}
                                              blurOnSubmit={false}
                                              />
                                              <View style={{position:'absolute',marginLeft:wp('3%'),top:hp('1%')}}>
                                              <Icon name={'md-search'} size={20} color={'grey'} />
                                              </View>
                      </View>
        </View>
</Modal>
  {/* category search */}

          </View>
        );
      }
    }