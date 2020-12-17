import { Card } from 'native-base';
import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import colors from '../constants/colors' ;

const HEIGHT = Dimensions.get('window').height ;


const Button =(props) =>{
    if(props.red){
        return(
            <Card style={styles.cardStyle}>
                    <TouchableOpacity
                        onPress={props.onPress}
                        style={styles.text}>
    
                        <Text style={styles.title}>{props.title}</Text>
                    </TouchableOpacity>
            </Card>
        )
    }
    else{
        return(
            <Card style={styles.greycardStyle}>
                    <TouchableOpacity
                        onPress={props.onPress}
                        style={styles.text}>
    
                        <Text style={styles.blackTitle}>{props.title}</Text>
                    </TouchableOpacity>
            </Card>
        )
    }
    
}

export default Button ;

const styles=StyleSheet.create({
    text:{
        width:'90%',
        height:HEIGHT / 20 ,
        borderColor:'transparent',
        borderWidth:2   ,
        borderRadius:10,
        alignSelf:'center',
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center',

    },
    title:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    blackTitle:{
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    },
    trans_title:{
        fontSize:20,
        color:'white'
    },
    cardStyle:{
        width:'90%',
        borderRadius:5,
        alignSelf:'center',
        marginVertical:15,
        backgroundColor:colors.red,
        height:HEIGHT / 14 ,

    },
    greycardStyle:{
        width:'90%',
        borderRadius:5,
        alignSelf:'center',
        marginVertical:15,
        backgroundColor:colors.lighGrey,
        height:HEIGHT / 14 ,
        flex:1

    },
   
})