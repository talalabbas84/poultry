import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';

import {Card} from 'native-base' ;

const HEIGHT = Dimensions.get('window').height ;

const textInput =(props) =>{
    return(
        <Card style={styles.text}>
                
                <TextInput
                placeholder={props.placeholder}
                />
        </Card>
    )
}

export default textInput ;

const styles=StyleSheet.create({
    text:{
        width:'45%',
        height:HEIGHT / 14 ,
        flexDirection:'row',
        borderWidth:2   ,
        borderRadius:2,
        marginVertical:5,
        alignItems:'center'

    },
    image:{
        width:30,
        height:30,
        resizeMode:'contain',
        marginHorizontal:10
    }
})