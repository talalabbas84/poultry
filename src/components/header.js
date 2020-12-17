import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors' ;
import {
    burger,
    header, facebook , whatsapp
} from '../constants/images' ;

const HEIGHT = Dimensions.get('window').height ;


const authHeader =(props) =>{
    if(props.title){
        return(
            <View style={styles.text}>
                <TouchableOpacity
                    onPress={()=> props.navigation.openDrawer()}
                    >
                       <Image style={styles.image} source={burger}/>
    
                </TouchableOpacity>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity style={{flexDirection:'row'}} >  
                         <Image style={{width:25,height:25 ,marginRight:5}}  source={whatsapp}/>
                        <Image style={{width:25,height:25}} source={facebook}/>
                </TouchableOpacity>
    
            </View>
        )
    }
    else{
        return(
            <View style={styles.text}>
                <TouchableOpacity
                    onPress={()=> props.navigation.openDrawer()}
                    >
                       <Image style={styles.image} source={burger}/>
    
                </TouchableOpacity>
                <Image style={styles.header} source={header}/>
                <TouchableOpacity
                onPress={()=> props.navigation.goBack()}
                style={{flexDirection:'row'}}  > 
                <Text >Back</Text>
            </TouchableOpacity>
    
            </View>
        )
    }
    
}

export default authHeader ;

const styles=StyleSheet.create({
    text:{
        width:'95%',
        height:HEIGHT / 10 ,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'silver',
        borderBottomWidth:1,
        marginHorizontal:10,
        alignSelf:'center',
        marginBottom:10

    },
    title:{
        fontSize:20,
        color:'black',
        alignSelf:'center'
    },
    image:{
        width:30,
        height:30,
        resizeMode:'contain',
        marginHorizontal:10
    },
    header:{
        height:30,
        width:'70%',
        resizeMode:'contain'
    }
})