import {StyleSheet} from 'react-native' ;
import colors from '../constants/colors';


const mainStyles = StyleSheet.create({

    line:{
        width:'100%',
        height:1,
        backgroundColor:'silver',
        marginVertical:10
    },
    bottomView:{
        bottom:0,
        position:'absolute',
        marginBottom:20,
        flex:1,
        width:'100%',

    },
    smallText:{
        alignSelf:'center',
        color:colors.grey,
        fontSize:14,
        marginVertical:5
    },
    boldText:{
        alignSelf:'center',
        color:'black',
        fontSize:18,
        marginVertical:5,
        fontWeight:'bold'  
    },
    mediumBold:{
        alignSelf:'center',
        color:'black',
        fontSize:15,
        marginVertical:5,
        fontWeight:'bold'  
    },
    imageLogo:{
        alignSelf:'center',
        marginVertical:20,
        width:140,
        height:140,
        resizeMode:'contain'
    },
    image:{
        width:20,
        height:20,resizeMode:'contain'
    }

})

export default mainStyles ;
