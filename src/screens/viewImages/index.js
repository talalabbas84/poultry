import { Card } from 'native-base';
import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Header from '../../components/header' ;
import colors from '../../constants/colors';
import {

    eggs,
    chick,
    chicken,tag,
    like,
    unlike
} from '../../constants/images' ;
import AppStyles from '../../styles' ;

const HEIGHT = Dimensions.get('window').height ;
const WIDTH = Dimensions.get('window').width ;
class ViewImages extends React.Component{


    state={
        data:[
            {title:'AD # 1', image:chicken , route:'Rates',like:false},
            {title:'AD # 2', image:eggs,like:false},
            {title:'AD # 2', image:tag,like:false},
            {title:'AD # 3', image:chick,like:false}
        ]
    }


    renderItem=({item,index})=>{
        return(
            <Card style={styles.image} >
                <Image style={styles.image}/>
            </Card>
        )
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
                <Header back navigation={this.props.navigation} />

                <Image style={styles.coverImage}></Image>

                <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.FlatListStyles}
                data={this.state.data}
                horizontal
                renderItem={this.renderItem}
                keyExtractor={(key,index) => index.toString()}
                />
            </View>
        )
    }
}
export default ViewImages ;    

const styles = StyleSheet.create({
    card:{
        width: WIDTH / 1.1  ,
        height:HEIGHT / 2.2,
        borderRadius:20,
        marginVertical:5,
        elevation:5,
        marginHorizontal:10,
        marginVertical:5,
        alignSelf:'center'
    },
    FlatListStyles:{
        marginLeft:20,
        marginTop:10
    },
    text:{
        color:colors.red,
        fontWeight:'bold',
        fontSize:12,
        marginVertical:10
    },
    image:{
        resizeMode:'contain',
        width:40,height:45
    },
    touchcard:{
        marginVertical:5,
        marginHorizontal:10,
        marginVertical:5
    },
    bottomBtn:{
        bottom:0,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.red,
        width:'100%',
        height:60,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20
    },
    whiteText:{
        color:'white'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    blackText:{
        marginLeft:10,
        color:colors.grey
    },
    likeView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    immage:{
        width:30,
        height:30,
        resizeMode:'contain'
    },
    coverImage:{
        width:'90%',
        alignSelf:'center',
        backgroundColor:colors.lighGrey,
        height:HEIGHT / 2,
        borderRadius:5
    },
    image:{
        width:100,
        height:100,
        backgroundColor:colors.lighGrey,
        marginRight:10
    }
})