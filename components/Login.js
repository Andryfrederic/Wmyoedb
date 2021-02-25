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
  CheckBox,
  TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Login  extends React.Component{

  static navigationOptions =
  {
   headerShown: false
  };
       constructor(props){
       super(props)
           this.state={
               login:'',
           password:'',
                 
       }
       this.state={
         showPass:true,
         press:false,
         remebrer:false  
         
         }
}
componentDidMount() {
 this.getUser();   
   }


connecter =() =>{   
const {login}=this.state;
const {password}=this.state;
const {remebrer}=this.state;
fetch('https://www.preprod.forma2plus.com/portail-stagiaire/index.php', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
     
         login:login,
     
       password:password,
     
     
       })

}).then((response) => response.json())
.then((responseJson) => {
         if(responseJson =='null')
                   {
                     alert('Login ou mot de passe invalide');
                       
                   }
         else{
                     if(remebrer == true){
                             console.log(JSON.stringify(responseJson));
                             this.storeUser(responseJson.login,
                             responseJson.nom,
                             responseJson.prenom,
                             responseJson.email,
                             responseJson.tel,
                             responseJson.adresse,
                             responseJson.cp,
                             responseJson.ville,
                             responseJson.password,
                             responseJson.id,
                             responseJson.id_groupe
                         
                             );
                           this.props.navigation.navigate('Accueil',{user:responseJson,
                             login1:responseJson.login,
                             nom1:responseJson.nom,
                             prenom1:responseJson.prenom,
                             email1:responseJson.email,
                             tel1:responseJson.tel,
                             adresse1:responseJson.adresse,
                             cp1:responseJson.cp,
                             ville1:responseJson.ville,
                             password1:responseJson.password,
                             id1:responseJson.id,
                             id_groupe:responseJson.id_groupe

                           })                            ; 

                     }
                     else{
                      // this.props.navigation.navigate('Accueil');
                             console.log(JSON.stringify(responseJson));
                             this.props.navigation.navigate('Accueil',{user:responseJson,
                             login1:responseJson.login,
                             nom1:responseJson.nom,
                             prenom1:responseJson.prenom,
                             email1:responseJson.email,
                             tel1:responseJson.tel,
                             adresse1:responseJson.adresse,
                             cp1:responseJson.cp,
                             ville1:responseJson.ville,
                             password1:responseJson.password,
                             id1:responseJson.id,
                             id_groupe:responseJson.id_groupe,

                           });

                     }
 }

      

     }).catch((error) => {
       console.error(error);
     });
 }
 storeUser = async (a,b,c,d,e,f,g,h,i,j,k) =>{
   try {
     await AsyncStorage.multiSet([
           ["login",a],
           ["nom",b],
           ["prenom",c],
           ["email",d],
           ["tel",e],
           ["adresse",f],
           ["cp",g],
           ["ville",h],
           ["password",i],
           ["id",j],
           ["id_groupe",k]
       ]);
       // alert(a+' et '+b+' stored');
   } catch (error) {
     // Error saving data
   }
 }
 getUser = async () =>{
   try {
     await AsyncStorage.multiGet(['login','nom','prenom','email','tel','adresse','cp','ville','password','id']).then((data) => {
       let a = data[0][1];
       let b = data[1][1];
       let c = data[2][1];
       let d = data[3][1];
       let e = data[4][1];
       let f = data[5][1];
       let g = data[6][1];
       let h = data[7][1];
       let i = data[8][1];
       let j = data[9][1];
   if(a !== null){
     this.props.navigation.navigate('Accueil',{
       login1:a,
       nom1:b,
       prenom1:c,
       email1:d,
       tel1:e,
       adresse1:f,
       cp1:g,
       ville1:h,
       password1:i,
       id1:j

     });
     // alert(a+', '+b+', '+c+','+d+','+e+','+f+','+g+','+h+','+i+','+j);
     

   }
   // alert(log);
           //Your logic
   });
       // alert(a+' et '+b+' stored');
   } catch (error) {
     // Error saving data
   }
 }
 removeUser = async (i) =>{
   try {
     await AsyncStorage.multiGet(['login', 'password']).then((data) => {
       let log = data[0][1];
       let pas = data[1][1];
   if(log !== ''){
     this.props.navigation.navigate('Accueil',{user:i});

   }
   // alert(log);
           //Your logic
   });
       alert(a+' et '+b+' stored');
   } catch (error) {
     // Error saving data
   }
 }
 // rememberUser = async () => {
 //   try {
 //     await AsyncStorage.setItem('KEY', this.state.username);
 //   } catch (error) {
 //     alert("can't remebrer your login");
 //   }
 //   };
 change(p){
this.setState({password:p});

 }
 
render(){
const {navigate} =this.props.navigation;

return(
<View style={styles.container}>
     <View style={styles.headcontainer}>
           <Image style={styles.ima}
             source={require('../image/logofotsy.png')}>
           </Image>
           <Image style={styles.myoedb}
             source={require('../image/Logo-MYOEDB.png')}>
           </Image>
           <Text style={{color:'white',fontSize:hp('2%'),textAlign:'center',marginTop:hp('1%'),fontStyle:'normal',fontWeight:'100',opacity:0.5}}>
           My own expression databank 
           </Text>
         
     </View>
     <Text style={styles.titre}>
             Use your Forma2+ elearning ID to start
           </Text>
           {/* <Text style={styles.tex}>
               Nom d'utilisateur
           </Text> */}
 <View style={{
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center',
   borderWidth:0.5,
   borderRadius:30,
   borderColor:'white',
   width:wp('80%'),
   height:hp('6.5%'),
   alignSelf:'center',
   paddingLeft:30,
 }}>
           <Icon name={'ios-person'} size={15} color={'white'}
                    style={styles.inputIcon} 
                   />
           <TextInput style={styles.place}
          ref={input1 => { this.textInput1 = input1 }}
           placeholderTextColor = "white"
           placeholder='Username'
           
           underlineColorAndroid='transparent'
           onChangeText= {login => this.setState({login})}

           />
 </View>
                    
           {/* <Text style={styles.tex}>
               Mots de passe
           </Text> */}
 <View style={{
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center',
   borderWidth:0.5,
   borderRadius:30,
   borderColor:'white',
   width:wp('80%'),
   height:hp('6.5'),
   alignSelf:'center',
   paddingLeft:30,
   marginTop:hp('3%')
 }}>
           <Icon name={'lock-closed-sharp'} size={15} color={'white'}
                    style={styles.inputIcon}
                   />

           <TextInput style={styles.placeP}
           ref={input => { this.textInput = input }}
           maxLength={12}
           secureTextEntry={true}
           placeholderTextColor = "white"
           placeholder='Password'
           // underlineColorAndroid='transparent'
           onChangeText= {password => this.setState({password})}
           
           />

          {/* <TouchableOpacity  style={styles.btneye}>
           <Icon name={'ios-eye'} size={28} color={'#C9A022'}
                    
                   />
           </TouchableOpacity> */}
   </View>

   <View    style={styles.butV}>

             <TouchableOpacity 
             style={styles.but}
             onPress={()=>{this.connecter(),this.textInput.clear(),this.textInput1.clear()}}>
               {/* this.props.navigation.navigate('Accueil') 
              
              this.connecter()*/}
               <Text style={styles.buttext}>
                 LOGIN
               </Text>
               
           </TouchableOpacity>  
          
   </View>
   <View style={{flexDirection:'row',top:hp('2%'),marginLeft:wp('20%'),alignItems:'center'}}>
   {/* <CheckBox
   // style={{borderColor:'red',borderWidth:3}}
   // color={'red'}
   //  onPress={()=>{this.setState({remebrer:true})}
value={this.state.remebrer}
onValueChange={() => this.setState({remebrer:!this.state.remebrer})}
checked={true}
/> */}
     {!this.state.remebrer?(<TouchableOpacity
     onPress={() => this.setState({remebrer:!this.state.remebrer})}>
         <View
         style={{
           width:wp('4%'),
           height:hp('2%'),
           backgroundColor:'white'
         }}
         >
            

         </View>
     </TouchableOpacity>):(<TouchableOpacity
     onPress={() => this.setState({remebrer:!this.state.remebrer})}>
         <View
         style={{
           width:wp('4%'),
           height:hp('2%'),
           backgroundColor:'white'
         }}>
                         <Image style={{
                           width:wp('3.8%'),
                           height:hp('2%'),
                         }}
                                     source={require('../image/check.png')}>
                         </Image>
         </View>
     </TouchableOpacity>)}
     <Text style={{color:'white',fontWeight:'100',marginLeft:wp('2%')}}>Remember me
     </Text>

</View>
   <View style={{marginTop:hp('20%')}}>

               <Text style={{
                 color:'white',opacity:0.3,textAlign:'center',
                 
               }}>
                 My OEDB App V0.1
               </Text>
             
              
   </View>
</View>  
);
}
}

  
  
  
  
    
    
  const styles=StyleSheet.create({
  container:{
  backgroundColor:'#5C4DB1',
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