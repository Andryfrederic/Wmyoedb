import React, { Component } from 'react';
import { StyleSheet, FlatList,View, Button,TextInput,TouchableOpacity,Text,Image, Modal } from 'react-native';

import Permissions from 'react-native-permissions';
import Sound from 'react-native-sound';
import AudioRecord from 'react-native-audio-record';
import Icon from 'react-native-vector-icons/Ionicons';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration, TranslatorFactory} from 'react-native-power-translator';
// import SocketIOClient from 'react-native-socket.io-client'
// import SocketIOClient from 'socket.io-client/dist/socket.io.js'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Spinner from 'react-native-spinkit'
import Footer from './footer/layouts/footer';
import config from '../config.json';
import Tts from "react-native-tts";
// import {SpeechToText} from 'react-native-watson-speech-to-text';
export default class Enregistre extends Component {
    static navigationOptions =
   {
    headerShown: false,
    title: 'Forma2+',
    headerStyle: {
      backgroundColor:'#2f3c7e',
     
    },
    headerTintColor: '#fff',
    headerLeft: () => null
    // headerTintColor: '#f4511e',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // }
   }
   ;
  //  constructor(props){
  //   super(props);
  //   this.socket = SocketIOClient('https://demo.forma2plus.com:1345', {reconnect: true});
  //   this._sendChunk = this._sendChunk.bind(this);
  //   this._getReply = this._getReply.bind(this);
  
  // }

  sound = null;
  state = {
    users:false,
    audioFile: '',
    isLoading:false,
    recording: false,
    loaded: false,
    paused: true,
    currentTime: 0.0,
    infolangue: this.props.navigation.state.params.PickerValueHolder,
    PickerValueHolder: this.props.navigation.state.params.idlangue,
    id: this.props.navigation.state.params.id1, 
    login:this.props.navigation.state.params.login1,
    nom1:this.props.navigation.state.params.nom1,
    prenom1:this.props.navigation.state.params.prenom1,
    email1:this.props.navigation.state.params.email1,
    tel1:this.props.navigation.state.params.tel1,
    adresse1:this.props.navigation.state.params.adresse1,
    cp1:this.props.navigation.state.params.cp1,
    ville1:this.props.navigation.state.params.ville1,
    password1:this.props.navigation.state.params.password1,
    id_groupe:this.props.navigation.state.params.id_groupe,
    idecate:this.props.navigation.state.params.idecat,
    dataSource:this.props.navigation.state.params.dataSource,
    Scolor:'green',
    Plcolor:'grey',
    transBut:false,
    trans:false,
    transaudio:'',
    choice:false,
    recAudio:false,
    plus:false
  };
// SpeechToText.initialize("");

  async componentDidMount() {
    await this.checkPermission();

    const options = {
      sampleRate: 32000,
      channels: 1,
      bitsPerSample: 16,
      audioSource: 6,
      wavFile: 'test.wav',
      // startRecording()
    };
    // startRecording();
    AudioRecord.init(options);

    AudioRecord.on('data', data => {
      // const chunk = Buffer.from(data, 'base64');
      // console.log(chunk.toString('base64'));
      // this.compte();// do something with audio chunk
// this._sendChunk(chunk);
// this.socket.on('dong', this._getReply);
    });
  }
  // _sendChunk(chunk){

  //   socket.emit('binaryData',chunck);
  // }
  
  // _getReply(data){

  //   console.log('Reply from server:' + data);
  // }

//   testparse= () =>{
// const idint=parseInt(this.state.id);
// alert(idint);
//   }
openSearch() {
 alert('search')
}
openPlus() {
 this.setState({plus:true});
}
openHome() {
 this.props.navigation.navigate('Accueil');
}
handleTranslate = (itemValue) => {
  if(itemValue!=''){
    
    this.setState({picIdlangue:itemValue});
    // console.log(this.state.expres+'_%_'+itemValue.substring(0,2));
    TranslatorConfiguration.setConfig(ProviderTypes.Google, config.googleCloud.apiKey,itemValue.substring(0,2));
    // config.googleCloud.apiKey
    const translator = TranslatorFactory.createTranslator();
    translator.translate(this.state.transaudio).then(translated => {
          Tts.setDefaultLanguage(itemValue);
            this. setState({targTEXT:translated})
    });
   }else {
     alert('This option is not available');
   }

                // this.setState({submit: true})
                // const translator = TranslatorFactory.createTranslator();
                // translator.translate(text).then(translated => {
                //     Tts.getInitStatus().then(() => {
                //         // Tts.speak(translated);
                //         this. setState({targTEXT:translated,expres:text})
                //     });
                //     Tts.stop();
  // });
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
compte =()=>{
let i=1;
i++;
console.log('morceau numero: ' +i);
}
  checkPermission = async () => {
    const p = await Permissions.check('android.permission.RECORD_AUDIO');
    console.log('permission check', p);
    if (p === 'authorized') return;
    return this.requestPermission();
  };

  requestPermission = async () => {
    const p = await Permissions.request('android.permission.RECORD_AUDIO');
    console.log('permission request', p);
  };

  start = () => {
    console.log('start record');
    this.setState({ audioFile: '', recording: true, loaded: false });
    AudioRecord.start();
  };

  stop = async () => {
    if (!this.state.recording) return;
    console.log('stop record');
    let audioFile = await AudioRecord.stop();
    console.log('audioFile', audioFile);
    this.setState({ audioFile, recording: false });
  };

  load = () => {
    return new Promise((resolve, reject) => {
      if (!this.state.audioFile) {
        return reject('file path is empty');
      }

      this.sound = new Sound(this.state.audioFile, '', error => {
        if (error) {
          console.log('failed to load the file', error);
          return reject(error);
        }
        this.setState({ loaded: true });
        return resolve();
      });
    });
  };

  play = async () => {
    if (!this.state.loaded) {
      try {
        await this.load();
      } catch (error) {
        console.log(error);
      }
    }

    this.setState({ paused: false });
    Sound.setCategory('Playback');

    this.sound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
      this.setState({ paused: true });
      // this.sound.release();
    });
  };

  // uploadAudio = async () => {
  //   const path = `file://${audioFile}`
  //   const formData = new FormData()
  //   formData.append('file', {
  //     uri: path,
  //     name: 'test.aac',
  //     type: 'audio/aac',
  //   })
  //   try {
  //     const res = await fetch(API_UPLOAD_MSG_FILE, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       body: formData,
  //     })
  //     const json = await res.json()
  //   } catch (err) {
  //     alert(err)
  //   }
  // }
  testrans= async () => {
    const url = "54.36.183.14:5007/transcript";
    const filename= "10304_1594802100.wav"
    
    const formData = new FormData();

    formData.append('filename',filename);
    // formData.append('targL',Picker);
    // formData.append('recording',{
    //   uri: path,
    //   name: 'test.wav',
    //   type: 'audio/wav',
    // });
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': `audio/aac`,
        },
        body: formData,
      }).then((response) => response.json())
      .then((responseJson) => {
      // console.log(response.mess);
      if(responseJson =='')
      {
        alert('no response');
        // user:responseJson;
          
      }
      else{
        // alert('Audio saved');
    console.log(responseJson);
        // alert('Login ou mot de passe invalide');
      }
      // const json = await response.json()
    })
  } catch (err) {
      console.log(err)
    }
  }
  uploadAudio = async () => {
    this.setState({isLoading:true});
    // this.animation();
    const url = "https://www.preprod.forma2plus.com/portail-stagiaire/upload1.php";
    const {audioFile,idecate}=this.state;
    const path = 'file://' + audioFile;
    const {infolangue}=this.state;
    // alert(path);
    const formData = new FormData();
    const id=this.state.id;
    const Picker=this.state.PickerValueHolder.id;
    console.log(idecate);
    formData.append('id_stag',id);
    formData.append('targL',Picker);
    formData.append('infolangue',infolangue);
    formData.append('idecate',idecate);
    formData.append('id_groupe',this.state.id_groupe);
    formData.append('recording',{
      uri: path,
      name: 'teste.wav',
      type: 'audio/wav',
    });
    // formData.append('multipart/form-data');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': `audio/aac`,
        },
        body: formData,
      }).then((response) => response.json())
      .then((responseJson) => {
      // console.log(response.mess);
      if(responseJson =='')
      {
        alert('no response');
        // user:responseJson;
          
      }
      else{
        this.setState({isLoading:false});
        alert('Audio saved');
        console.log(responseJson);
    
        // alert('Login ou mot de passe invalide');
      }
      // const json = await response.json()
    })
  } catch (err) {
      console.log(err)
    }
  }
  transcript = async () => {
    this.setState({transcripts:true});
    // this.animation();
    const url = "https://www.preprod.forma2plus.com/portail-stagiaire/upaudio.php";
    const {audioFile}=this.state;
    const path = 'file://' + audioFile;
    const {infolangue}=this.state;
    // alert(path);
    const formData = new FormData();
    const id=this.state.id;
    const Picker=this.state.PickerValueHolder.id;
    formData.append('id_stag',id);
    formData.append('targL',Picker);
    formData.append('infolangue',infolangue);
    formData.append('id_groupe',this.state.id_groupe);
    formData.append('recording',{
      uri: path,
      name: 'teste.wav',
      type: 'audio/wav',
    });
    // formData.append('multipart/form-data');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': `audio/aac`,
        },
        body: formData,
      }).then((response) => response.json())
      .then((responseJson) => {
      // console.log(response.mess);
      if(responseJson =='')
      {
        this.setState({transcripts:false});
        alert('no response');
        // user:responseJson;
          
      }
      else{
        this.setState({transcripts:false,transaudio:responseJson});
        // alert(responseJson);
        console.log(responseJson);
    
        // alert('Login ou mot de passe invalide');
      }
      // const json = await response.json()
    })
  } catch (err) {
      console.log(err)
    }
  }


  pause = () => {
    this.sound.pause();
    this.setState({ paused: true });
  };
  animation=()=>{
    

  };

  render() {
    const { recording, paused, audioFile } = this.state;
    const { goBack } = this.props.navigation;
    const {isLoading}=this.state;
    // if (this.state.isLoading) {
    //   return (

    //     <View style={{backgroundColor: 'transparent',height:hp('20%'),justifyContent:'center',alignItems:'center'}}>
    //          <Text
    //          style={{
    //            fontSize:hp('3%'),
    //            color:'#4F2C8A',
    //          }}
    //          > 
    //          Uploading audio
    //          </Text>
    //          <Spinner
    //          color={'#C9A022'} size={75} type={'Wave'} 
    //          />
    //     </View>      
    //   );
    // }
    return (
      <View style={styles.container}>
<View style={{justifyContent:'center',height:hp('6%'),marginLeft:wp('2.5%')}}>
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
                                                RECORDE AUDIO
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

      

      <Modal 
    transparent={true}
    animationType="fade"
    visible={this.state.users}
    >
              <TouchableOpacity onPress={() => this.setState({users:false}) }
              style={{with:wp('100%'),height:hp('100%')}}>
                        <View style={{top:hp('7%'),width:wp('30%'), marginLeft:wp('70%')}}>
                                  <View style={{backgroundColor:'#2f3c7e',height:hp('6.5%'),borderWidth:1,borderColor:'white'}}>
                                            <TouchableOpacity
                                            onPress={() =>{this.setState({users:false}),this.props.navigation.navigate('User',{
                                            login1:this.state.login,
                                            nom1:this.state.nom1,
                                            prenom1:this.state.prenom1,
                                            email1:this.state.email1,
                                            tel1:this.state.tel1,
                                            adresse1:this.state.adresse1,
                                            cp1:this.state.cp1,
                                            ville1:this.state.ville1,
                                            password1:this.state.password1,
                                            id1:this.state.id
                                            })}}
                                            style={{
                                              flexDirection:'row',
                                              alignSelf:'center'
                                            }}
                                            >
                                              <Icon name={'ios-contact'} size={20} color={'white'}/>
                                                      <Text style={{color:'white',fontSize:hp('2%'),textAlign:'center',marginLeft:wp('3%')}}>My profil
                                                      </Text>
                                            </TouchableOpacity>
                                  </View> 
                        <View style={{backgroundColor:'#2f3c7e',height:hp('6.5%'),borderWidth:1,borderColor:'white'}}>
                                  <TouchableOpacity 
                                  style={{
                                    flexDirection:'row',
                                    alignSelf:'center'
                                  }}
                                  onPress={() =>{this.props.navigation.navigate('Login'),this.setState({users:false}),this.removeUser()}}>
                                            <Icon name={'md-log-out'} size={20} color={'white'}/>
                                            <Text style={{color:'white',fontSize:hp('2%'),textAlign:'center',marginLeft:wp('3%')}}>Logout
                                            </Text>
                                  </TouchableOpacity>
                        </View> 
                        </View>
              </TouchableOpacity>
    </Modal>
    <Modal
        transparent={true}
        animationType="fade"
        visible={this.state.choice}
    >
    <View
                   style={{
                     flexDirection:'row',
                     justifyContent:'space-evenly',
                    //  position:'absolute',
                     top:hp('40%')
                    //  margin:30
                   }}
                   >
                          <TouchableOpacity
                          onPress={() => {this.start(),this.setState({Scolor:'grey',Stopcolor:'green',Plcolor:'grey',choice:false})}}
                          >
                                  <View
                                  style={{
                                    backgroundColor:'blue',
                                    height:hp('8%'),
                                    justifyContent:'center',
                                    padding:10
                                  }}>
                                        <Text
                                        style={{
                                          color:'white'
                                        }}>
                                        Record audio
                                        </Text>
                                  </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                          onPress={() => this.setState({choice:false,recAudio:true})}
                          >       
                                  <View
                                  style={{
                                    backgroundColor:'blue',
                                    height:hp('8%'),
                                    justifyContent:'center',
                                    padding:10
                                  }}>
                                        <Text
                                        style={{
                                          color:'white'
                                        }}>
                                        Real time transcription
                                        </Text>
                                  </View>
                          </TouchableOpacity>
                         
                   </View>
    </Modal>




{/* plus */}
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
{/* plus */}


                 <View style={styles.row}>
                          {!recording?(<TouchableOpacity
                          // onPress={this.start,}
                          onPress={() =>{this.start(),this.setState({Scolor:'grey',Stopcolor:'green',Plcolor:'grey',choice:false})}}
                          disabled={recording}
                          style={{
                            // backgroundColor:this.state.Scolor,
                            // width:wp('16%')
                          }}
                          >
                                 <Icon name={'ios-mic-circle-outline'} size={50} color={'#2f3c7e'}/>
                          </TouchableOpacity>):(<TouchableOpacity
                          onPress={() => {this.stop(),this.setState({Scolor:'green',
                                                                     Stopcolor:'grey',
                                                                     Plcolor:'green',
                                                                     trans:true
                                                                    })}}
                          disabled={!recording}
                          style={{
                            // backgroundColor:'green',
                            height:hp('25%')
                          }}
                          >       
                          <View>
                                 <Spinner  color={'#C9A022'} size={150} type={'Bounce'} />
                                  <View
                                  style={{
                                        alignSelf:'center',
                                        bottom:hp('19.5%')
                                  }}
                                  >
                                  <Icon name={'ios-mic-circle-outline'} size={70} color={'red'}/>
                                  </View>
                          </View>
                          </TouchableOpacity>)}

                          

                          {/* <Button onPress={this.start} title="Record" disabled={recording} />
                          <Button onPress={this.stop} title="Stop" disabled={!recording} /> */}
                          {audioFile? (<View>
                          <View>
                          {paused ? (
                            <View>
                            <TouchableOpacity
                          onPress={() => {this.play(),this.setState({Scolor:'green',Stopcolor:'grey'})}}
                          disabled={!audioFile}
                          style={{
                            // backgroundColor:this.state.Plcolor,
                            // width:wp('16%')
                          }}
                          >
                                 <Image style={{width:wp('6.6%'),height:hp('3.2%')}}
                                                                        source={require('../image/sound.png')}>
                                  </Image>
                          </TouchableOpacity>
                          </View>
                          ) : (
                            <TouchableOpacity
                          onPress={() => {this.pause(),this.setState({Scolor:'green',Stopcolor:'grey'})}}
                          disabled={!audioFile}
                          style={{
                            // backgroundColor:this.state.Plcolor,
                            // width:wp('16%')
                          }}
                          >
                                  <Icon name={'ios-pause'} size={30} color={'grey'}/>
                          </TouchableOpacity>
                          )}
                          </View>
                              

                          
                             
                        </View>
                          ):null}
                            
                            {/* <TouchableOpacity  style={{width:wp('20%'),height:hp('8%'),justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'blue'}}
                                      onPress={() => this.uploadAudio()}>
                                      {/* send */}
                                      {/* <Text  style={{fontSize:hp('2.5%'),marginLeft:wp('2%'),color:'white'}}>
                                          UPLOAD
                                      </Text> */}
                                      {/* <Icon style={{marginLeft:wp('3%'),bottom:hp('1%')}}
                                      name={'ios-send'} size={30} 
                                      color={'#2f3c7e'}  
                                                /> */}
                            {/* </TouchableOpacity> */}

                  </View>
                  <View
       style={{alignItems:'center'}}
       >
         {this.state.transcripts?
          (
          <View
          style={{alignItems:'center',
        position:'absolute',
        top:hp('18%')
      }}
          >
          <Spinner  color={'#C9A022'} size={35} type={'FadingCircle'} />
          </View>
          ):(null)
         }
        
      </View> 
                  {audioFile?(
                            <View
                                            style={{
                                              marginVertical:hp('2%')
                                            }}
                                            >
                                            
                                                <Text
                                                style={{
                                                  textAlign:'center',
                                                  fontSize:12
                                                }}
                                                >
                                                What do you whant with this audio File?
                                                </Text>
                                                {this.state.trans?(<View style={{width:wp('100%'),alignSelf:'center'}}>
                                                <View>
                                                          {/* <TouchableOpacity
                                                          onPress={() =>{this.transcript(),this.setState({trans:false})}}
                                                          style={{
                                                            flexDirection:'row',
                                                            alignSelf:'center'
                                                          }}
                                                          >
                                                                    <Text style={{color:'white',fontSize:hp('2%'),textAlign:'center',marginLeft:wp('3%')}}>Transcript to text
                                                                    </Text>
                                                          </TouchableOpacity> */}
                                                          <TouchableOpacity style={{marginLeft:wp('5%'),width:wp('90%'), height:hp('5%'),backgroundColor:'#DC4F89',borderRadius:30,alignItems:'center',marginTop:hp('2%'),justifyContent:'center'}}
                                                          disabled={this.state.expres ==''}
                                                          onPress={() =>{this.transcript(),this.setState({trans:false})}}
                                                          >
                                                                    <Text style={{color:'white',fontWeight: 'bold'}}>
                                                                                      Get transcription
                                                                    </Text>
                                                          </TouchableOpacity>
                                                </View> 
                        <View >
                                  {/* <TouchableOpacity 
                                  style={{
                                    flexDirection:'row',
                                    alignSelf:'center'
                                  }}
                                  onPress={() =>{this.uploadAudio(),this.setState({isLoading:true})}}>
                                            <Text style={{color:'white',fontSize:hp('2%'),textAlign:'center',marginLeft:wp('3%')}}>Save and transcript
                                            </Text>
                                  </TouchableOpacity> */}
                                  <TouchableOpacity style={{marginLeft:wp('5%'),width:wp('90%'), height:hp('5%'),backgroundColor:'#DC4F89',borderRadius:30,alignItems:'center',marginTop:hp('2%'),justifyContent:'center'}}
                                                          disabled={this.state.expres ==''}
                                                          onPress={() =>{this.uploadAudio(),this.setState({isLoading:true})}}
                                                          >
                                                                    <Text style={{color:'white',fontWeight: 'bold'}}>
                                                                                      Tanscript and save
                                                                    </Text>
                                  </TouchableOpacity>                                 
                        </View>
                        </View>):null}
                        {this.state.transaudio?(<View
                        style={{
                          width:wp('100%'),
                          height:hp('40%'),
                          backgroundColor:'#E3E5E4'
                        }}>
                              <Text
                              style={{
                                textAlign:'center',
                                fontWeight:'bold'

                              }}
                              >
                                  Your speech:
                              </Text>
                              <Text
                              style={{
                                textAlign:'center',
                                fontSize:12,
                                

                              }}>
                                  {this.state.transaudio}
                              </Text>
                              <Text
                                                      style={{
                                                        fontSize:hp('2%'),
                                                        marginLeft:wp('5%'),
                                                        // marginTop:hp('2%'),
                                                        opacity:0.5
                                                      }}>
                                                      translate to 
                              </Text>
                              <View
                                                  style={{
                                                    marginVertical:hp('0%'),
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
                                                        


                              </View>
                              <Text
                                                      style={{
                                                        fontSize:hp('2%'),
                                                        marginLeft:wp('5%'),
                                                        // marginTop:hp('2%'),
                                                        opacity:0.5
                                                      }}>
                                                      Translated text
                               </Text>
                               <Text
                              style={{
                                textAlign:'center',
                                fontSize:12,
                                

                              }}>
                                  {this.state.targTEXT}
                              </Text>
                              <TouchableOpacity style={{marginLeft:wp('5%'),width:wp('90%'), height:hp('5%'),backgroundColor:'#DC4F89',borderRadius:30,alignItems:'center',marginTop:hp('2%'),justifyContent:'center'}}
                                                          disabled={this.state.expres ==''}
                                                          onPress={() =>{this.uploadAudio(),this.setState({isLoading:true})}}
                                                          >
                                                                    <Text style={{color:'white',fontWeight: 'bold'}}>
                                                                                      SAVE
                                                                    </Text>
                               </TouchableOpacity>
                        </View>):null}
                            </View>
                  ):null}
                  {/* <View>
                    <Text>
                      {this.state.id_groupe}
                    </Text>
                  </View> */}

                  <View style={{justifyContent:'center'}}>
              
                            
       <View
       style={{alignItems:'center'}}
       >
         {isLoading?
          (
          <View
          style={{alignItems:'center'}}
          >
          <Spinner  color={'#C9A022'} size={75} type={'Wave'} />
          <Text
          style={{fontSize:hp('2%'),bottom:hp('2%'),fontWeight:'bold'}}
          >
          Uploading and transcripting!
          </Text>
          </View>
          ):(null)
         }
        
      </View>
                  </View>
                  {/* <Modal 
    transparent={true}
    animationType="slide"
    visible={true}
    >
      <View>
        <Spinner  color={'#C9A022'} size={75} type={'Wave'} />
      </View>
    </Modal> */}
    {/* <View style={{
                              // top:hp('70%'),
                              alignSelf:'center',
                              position:'absolute',
                              bottom:0
                              }}>
                                    <TouchableOpacity onPress={() =>{this.props.navigation.goBack()}}>
                                              <Icon name={'ios-home'} size={30} 
                                              color={'#2f3c7e'}  
                                                        />
                                    </TouchableOpacity>
                            </View> */}
                      <Footer 
                       OpenHome={()=>this.openHome()}
                       OpenPlus={()=>this.openPlus()}
                       Opensearch={()=>this.openSearch()}
                       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center'
  },
  row: {
    top:hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  placeP:{
    top:50,
    color:'blue', 
    fontSize:hp('2.5%'),
    width: wp('80%'),
    height:hp('20%'),
   borderColor:'#C9A022',
   borderWidth:2,
    marginLeft:hp('6%'),
    // opacity:0,
  },
   btn:{
    padding:25,
// borderRadius:27,
backgroundColor:'#2f3c7e',
justifyContent:'center',
marginHorizontal:wp('12%'),
marginVertical:hp('5%'),
height:hp('0.2%'),
width: wp('22%'),

   },
   btntex:{
color:'white'

   },
});
