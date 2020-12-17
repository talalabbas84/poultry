import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Keyboard,
    Image
} from 'react-native';
import AppStyles from '../../styles';
import Button from '../../components/button' ;
import colors from '../../constants/colors';
import{
    phone,
    logo,
    pencil
} from '../../constants/images' ;
import TextInput from '../../components/miniTextInput' ;

const WIDTH = Dimensions.get('window').width ; 
const HEIGHT = Dimensions.get('window').height ; 

import firebase from 'react-native-firebase'

class Home extends React.Component{

    componentDidMount(){
          //  this.handleSendCode()
    }

    handleSendCode = () => {
        // Request to send OTP
        
          firebase
            .auth()
            .signInWithPhoneNumber('+923463257691')
            .then(confirmResult => {
              console.log("confirm", confirmResult);
            })
            .catch(error => {
              alert(error.message)
      
              console.log(error)
            })
       
      }

    render(){
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
                               <Image style={AppStyles.imageLogo} source={logo}/>

                <View style={AppStyles.line}></View>
                <Text style={AppStyles.boldText}>ENTER YOUR VERIFICATION CODE</Text>
                <Text style={AppStyles.smallText}>Enter the 4 digit code that was sent on</Text>
                <View style={{flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
                     <Text style={AppStyles.mediumBold}>(245)225-1917</Text>
                        <Image style={AppStyles.image}  source={pencil}/>
                </View>

                <View style={styles.inputBoxes}>
                            <TextInput
                           onChangeText={(text) => {
                               if(text.length===1){
                                this.secondTextInput.focus();
                               }
                           }}
                            keyboardType={'number-pad'}
                            maxLength={1} 
                            style={styles.input}/>

                            <TextInput
                            onChangeText={(text) => {
                                if(text.length===1){
                                 this.thirdTextInput.focus();
                                }
                            }}
                             keyboardType={'number-pad'}
                             ref={(input) => { this.secondTextInput = input; }}
                             maxLength={1} 
                             style={styles.input}/>

                            <TextInput 
                             onChangeText={(text) => {
                                if(text.length===1){
                                 this.fourthTextInput.focus();
                                }
                            }}
                            ref={(input) => { this.thirdTextInput = input; }}
                             keyboardType={'number-pad'}
                             maxLength={1} style={styles.input}/>

                            <TextInput
                            onChangeText={(text) => {
                                if(text.length===1){
                                 Keyboard.dismiss()
                                }
                            }}
                            ref={(input) => { this.fourthTextInput = input; }}
                            keyboardType={'number-pad'}
                            maxLength={1} 
                            style={styles.input}/>

                    </View>

             

                <View style={AppStyles.bottomView}>
                    <TouchableOpacity>
                            <Text style={AppStyles.smallText}>Resend code ?</Text>

                    </TouchableOpacity>
                    <Text style={AppStyles.mediumBold}>SEND CODE VIA SMS</Text>

                    <Button onPress={()=> this.props.navigation.navigate('Signup')} title="VERIFY"/>  

                </View>  
            </View>
        )
    }
}
export default Home ;                   


const styles = StyleSheet.create({

    text:{
        color:colors.blue,
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20
    },
    bottomView:{
        justifyContent:'center',
        alignItems:'center' ,
        alignContent:'center',
        width:'100%',



    },
    socialView:{
        marginVertical:30,
        justifyContent:'center',

    },
    image:{
        width:50,
        height:50,
        resizeMode:'contain',
        marginHorizontal:5
    },
    input:{
        borderRadius:8,
        width:WIDTH / 6,
        height:HEIGHT / 11,
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        textAlign:'center',
        backgroundColor:'white'

    },
    inputBoxes:{
        flexDirection:'row',
        marginVertical:35,
        marginHorizontal:10,
        alignSelf:'center'

    }
})