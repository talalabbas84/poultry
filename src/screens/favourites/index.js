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
class Home extends React.Component{


    state={
        data:[
            {title:'AD # 1', image:chicken , route:'Rates',like:false},
            {title:'AD # 2', image:eggs,like:false},
        ]
    }

    changeLikeIcon=(index) =>{
        //alert(index)
        let { data } = this.state;
        let targetPost = data[index];
    
        // Flip the 'liked' property of the targetPost
        targetPost.like = !targetPost.like;
    
        // Then update targetPost in 'posts'
        // You probably don't need the following line.
        // posts[index] = targetPost;
    
        // Then reset the 'state.posts' property
        this.setState({ data });
        }
    renderItem=({item,index})=>{
        return(
            <Card style={styles.card}>
                 <View
                   // onPress={()=> this.props.navigation.navigate(item.route)}
                    style={styles.touchcard}>
                        <View style={styles.likeView}>
                               <Text style={styles.text}>{item.title}</Text>
                              
                        </View>
                

                    <View style={styles.row}>

                            <View>
                                <View style={styles.row}>
                                    <Text >Weight</Text>
                                    <Text style={styles.blackText}>1134</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >Type</Text>
                                    <Text style={styles.blackText}>Lorem</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >rate </Text>
                                    <Text style={styles.blackText}>788</Text>

                                </View>
                                <View style={styles.row}>
                                    <Text >less on cash</Text>
                                    <Text style={styles.blackText}>2122</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >Address</Text>
                                    <Text style={styles.blackText}>4208</Text>

                                </View>

                                
                                <View style={styles.row}>
                                    <Text >city</Text>
                                    <Text style={styles.blackText}>Rome</Text>

                                </View>

                            </View>
                    

                            <View>
                                <View style={styles.row}>
                                    <Text >Weight</Text>
                                    <Text style={styles.blackText}>1134</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >Type</Text>
                                    <Text style={styles.blackText}>Lorem</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >rate </Text>
                                    <Text style={styles.blackText}>788</Text>

                                </View>
                                <View style={styles.row}>
                                    <Text >less on cash</Text>
                                    <Text style={styles.blackText}>2122</Text>

                                </View>

                                <View style={styles.row}>
                                    <Text >Address</Text>
                                    <Text style={styles.blackText}>4208</Text>

                                </View>

                                
                                <View style={styles.row}>
                                    <Text >city</Text>
                                    <Text style={styles.blackText}>Rome</Text>

                                </View>

                            </View>
                    


                    </View>
                    <Text style={[styles.text,{alignSelf:'center',fontSize:15}]}>VIEW IMAGES</Text>
                    </View>
                    <TouchableOpacity style={styles.bottomBtn}>
                        <Text style={styles.whiteText}>CALL NOW</Text>
                    </TouchableOpacity>
            </Card>
        )
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
                <Header back navigation={this.props.navigation} />

                <Text style={AppStyles.boldText}>FAVOURTIES</Text>


                <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.FlatListStyles}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(key,index) => index.toString()}
                />
            </View>
        )
    }
}
export default Home ;    

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
        marginHorizontal:10
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
    },
    immage:{
        width:30,
        height:30,
        resizeMode:'contain'
    }
})