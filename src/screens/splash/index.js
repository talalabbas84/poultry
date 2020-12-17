import React, { Component } from 'react';
import { Dimensions, View, StatusBar, Text, Image, Platform, StyleSheet, ImageBackground ,AsyncStorage} from 'react-native';
import{
    logo
} from '../../constants/images';


const HEIGHT = Dimensions.get('window').height ;
const WIDHT = Dimensions.get('window').width ;


class Splash extends Component {
   

    async componentDidMount() {
        
        StatusBar.setHidden(true);
        
            setTimeout(() => {

            this.props.navigation.replace('Verfication')
              }, 3000)
            
        
    }

    async componentWillUnmount() {
        StatusBar.setHidden(false);
    }

    renderSplashOrIndicator = () => {
        return (
            <View style={styles.Container}>

                           <Image  source={logo} style={styles.logo}></Image>
             

{/*                 

                 */}
                 
               

            </View>
        )
    }


    render() {
        return (

            this.renderSplashOrIndicator()
        );
    }
}


export default Splash;


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' ,
        width: '100%',
        height: '100%' ,
        backgroundColor:'white'
    },
   
    logo: {
        resizeMode:'contain',
        width:150,
        height:170,
        backgroundColor:'white'
      },
      circel:{
          backgroundColor:'white',
          borderRadius:100,
          width:200,
          height:200,
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'center'
      },
   
});
