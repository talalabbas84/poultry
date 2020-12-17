import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import AppStyles from '../../styles';
import Button from '../../components/button' ;
import TextInput from '../../components/textInput' ;
import colors from '../../constants/colors';
import{
    phone,
    logo,
    user
} from '../../constants/images' ;

class Home extends React.Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
                               <Image style={AppStyles.imageLogo} source={logo}/>
                <View style={AppStyles.line}></View>
                <Text style={AppStyles.boldText}>Welcome</Text>

                <TextInput
                length={11}
                keyboardType={'numeric'}
                image={user} placeholder="Full Name"/>
                <Button 
                onPress={()=> this.props.navigation.navigate('DrawerStack')}
                red
                title="COMPLETE SIGNUP"/>  

               
            </View>
        )
    }
}
export default Home ;                   