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
import Header from '../../../components/header' ;
import colors from '../../../constants/colors';
import {

    eggs,
    chick,
    chicken,tag,
    hen1,
    hen,
    chicks,eggs1,
    rate,
    shed
} from '../../../constants/images' ;

const HEIGHT = Dimensions.get('window').height ;
const WIDTH = Dimensions.get('window').width ;
class Home extends React.Component{


    state={
        data:[
            {title:'BROILER',urdutitle:'بروائلر', image:hen1 , route:'myAds'},
            {title:'GOLDEN MISRI', urdutitle:'گولڈن مسری',image:hen,route:'myAds'},
            {title:'CHICKS',urdutitle:'مرغی کا بچہ', image:chicks,route:'myAds'},
            {title:'EGGS', urdutitle:'انڈہ',image:eggs1,route:'myAds'},
            {title:'SHED', urdutitle:'شیڈ',image:shed,route:'myAds'},
           // {title:'RATE', urdutitle:'شرح',image:rate,route:'myAds'}
        ]
    }
    renderItem=({item,index})=>{
        if(index===4){
            return(
                <TouchableOpacity
               // onPress={()=> alert(item.title)}
                onPress={()=> this.props.navigation.navigate(item.route,{
                    from :item.title
                })}
                style={styles.mainView}>
                    <Card style={[styles.card,{elevation:10}]}>
    
                        <View style={{flexDirection:'row'}}>
                        <Image source={hen} style={styles.card1}>
                            
                            </Image>
                            <Image source={eggs1} style={styles.card1}>
                            
                            </Image>
                        </View>

                     
                      
                        </Card>
                        <Text style={styles.text}>{item.title}</Text>
    
                </TouchableOpacity>
    
            )
        }
        return(
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate(item.route)}
            style={styles.mainView}>
                <Card style={[styles.card,{elevation:10}]}>

                
                  <Image source={item.image} style={styles.card}>
                        
                    </Image>
                    </Card>
                    <Text style={styles.text}>{item.urdutitle}</Text>

            </TouchableOpacity>

        )
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
                <Header title="میرے اشتھارات" navigation={this.props.navigation} />

                {/* <Text style={styles.rates}>RATES</Text> */}
                <FlatList
                style={styles.FlatListStyles}
                data={this.state.data}
                numColumns={2}
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
        width: WIDTH / 2.8  ,
        height:HEIGHT / 6,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:30,
        marginRight:15,
        marginLeft:15,
        marginTop:5,
        marginBottom:5,
        margin:5,
    },
    FlatListStyles:{
        marginHorizontal:10,
        alignSelf:'center'
    },
    text:{
        color:colors.red,
        fontWeight:'bold',
        fontSize:16
    },
    urdutext:{
        fontSize:16,
        color:colors.textGrey,
        fontSize:13
    },
    image:{
        resizeMode:'contain',
        width:40,height:45
    },
    touchcard:{
        marginVertical:5,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        marginVertical:5
    },
    rates:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:10
    },
    mainView:{
        alignItems:'center',
        marginVertical:5
    },
    card1:{
        width: WIDTH / 7  ,
        height:HEIGHT / 15,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:5,
        resizeMode:'contain'
    },
})