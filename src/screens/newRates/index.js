import { Card } from 'native-base';
import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Header from '../../components/header' ;
import colors from '../../constants/colors';
import {

    eggs,
    chick,
    chicken,tag,
    hen1,
    hen,
    chicks,eggs1,
    rate,
    shed
} from '../../constants/images' ;

const HEIGHT = Dimensions.get('window').height ;
const WIDTH = Dimensions.get('window').width ;
import Swiper from 'react-native-swiper'
import { LineChart, Grid } from 'react-native-svg-charts'
import { Container, Content, ListItem, Radio, Right, Left } from 'native-base';

class Home extends React.Component{


    state={
        data:[
            {title1:'Karachi',title:'بروائلر', image:hen1 , route:'Available'},
            {title1:'Lahore', title:'گولڈن مسری',image:hen,route:'GolderMisiShowAdd'},
            {title1:'Islamabad',title:'مرغی کا بچہ', image:chicks,route:'ChickMenu'},
            {title1:'Faisalabad', title:'انڈہ',image:eggs1,route:'EggsMenu'},
        ],
         lahoredata : [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80],
         karachiData : [100, 50, -20, 15, 40, 24, -85, 91, 35, 53, -53, 24, 50, -20, -80],
         faislabadData : [-90, -20, 50, 24, -53, 53, -35, 91, 35, 53, -53, 24, 50, -20, -80],
         dummyData:[],

    }

    changeData=(city)=>{
        if(city === 'Karachi'){
            this.setState({
                dummyData:this.state.karachiData
            })
        }
        else if(city === 'Lahore'){
            this.setState({
                dummyData:this.state.lahoredata
            })
        }
        else {
            this.setState({dummyData:this.state.faislabadData})
        }
    }
    renderItem=({item})=>{
        return(
            <TouchableOpacity
            onPress={()=> this.changeData(item.title1)}
            
            style={styles.mainView}>
                <Card style={[styles.card,{elevation:10}]}>
                <Text style={styles.text}>185</Text>
                    <Text style={styles.text}>{item.title1}</Text>

                    <Text>Open - Close</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text>DOC</Text>
                        <Text>55.5</Text>

                    </TouchableOpacity>
                    </Card>
                   

            </TouchableOpacity>

        )
    }

    renderStateModal=()=>{
        return(
            <Modal
            backdropColor={'black'}
            backdropOpacity= {1}
              animationType="fade"
              transparent={true}
              visible={this.state.stateModalVisiblity}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                         <TextView
                            text="State/Province"
                            />
                        <View style={AppStyles.line}/>

                      <TouchableOpacity 
                        onPress={()=> this.onRadioSelect(true,false,false,false,false,this.state.city1Text)}
                        style={styles.radioStyle}>
                         
                      </TouchableOpacity>
                      <TouchableOpacity 
                        onPress={()=> this.onRadioSelect(false,true,false,false,false,this.state.city2Text)}

                      style={styles.radioStyle}>
                         

                          
                         <Radio
                         onPress={()=> this.onRadioSelect(false,true,false,false,false,this.state.city2Text)}
                         style={{marginTop:4}}
                            color={"black"}
                            selectedColor={"black"}
                            selected={this.state.city2}   />

                        <TextView
                        fontSize={18}
                        fontFamily={fonts.Sofia_Pro_Light_Az}
                        text={this.state.city2Text}
                        />
                       
                  </TouchableOpacity>
                      <TouchableOpacity 
                      onPress={()=> this.onRadioSelect(false,false,true,false,false,this.state.city3Text)}
                      style={styles.radioStyle}>
                         

                          
                         <Radio
                            onPress={()=> this.onRadioSelect(false,false,true,false,false,this.state.city3Text)}
                            style={{marginTop:4}}
                            color={"black"}
                            selectedColor={"black"}
                            selected={this.state.city3}   />

                        <TextView
                        fontSize={18}
                        fontFamily={fonts.Sofia_Pro_Light_Az}
                        text={this.state.city3Text}
                        />
                       
                  </TouchableOpacity>
                      <TouchableOpacity 
                      onPress={()=> this.onRadioSelect(false,false,false,true,false,this.state.city4Text)}
                      style={styles.radioStyle}>
                         

                          
                         <Radio
                            onPress={()=> this.onRadioSelect(false,false,false,true,false,this.state.city4Text)}
                             style={{marginTop:4}}
                            color={"black"}
                            selectedColor={"black"}
                            selected={this.state.city4}   />

                        <TextView
                        fontSize={18}
                        fontFamily={fonts.Sofia_Pro_Light_Az}
                        text={this.state.city4Text}
                        />
                       
                  </TouchableOpacity>
                      <TouchableOpacity 
                      onPress={()=> this.onRadioSelect(false,false,false,false,true,this.state.city5Text)}
                      style={styles.radioStyle}>
                         

                          
                         <Radio
                            onPress={()=> this.onRadioSelect(false,false,false,false,true,this.state.city5Text)}
                             style={{marginTop:4}}
                            color={"black"}
                            selectedColor={"black"}
                            selected={this.state.city5}   />

                        <TextView
                        fontSize={18}
                        fontFamily={fonts.Sofia_Pro_Light_Az}
                        text={this.state.city5Text}
                        />
                       
                  </TouchableOpacity>
             
                      <View style={AppStyles.line}/>

                     <View style={[styles.radioStyle,{right:0,bottom:0,position:'absolute',margin:8,marginRight:20}]}>
                        <TouchableOpacity
                         onPress={()=> this.setState({stateModalVisiblity:false})}
                            >
                            <TextView
                            fontSize={15}
                            fontFamily={fonts.Sofia_Pro_Light_Az}
                            text="CANCEL"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> this.setState({stateModalVisiblity:false})}
                            >
                            <TextView
                            fontSize={15}
                            fontFamily={fonts.Sofia_Pro_Light_Az}

                            text="OK"
                            />
                        </TouchableOpacity>
                     </View>
                  </View>
              </View>
            </Modal>
        
        )
    }

    componentDidMount(){
        this.setState({dummyData:this.state.lahoredata})
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:colors.backColor}}>
                <Header title="شرح" navigation={this.props.navigation} />

                <Radio
                              // onPress={()=> this.onRadioSelect(true,false,false,false,false,this.state.city1Text)}
                                style={{marginTop:4}}
                                color={"black"}
                                selectedColor={"black"}
                                selected={true}   />

                            <TextView
                            fontSize={18}
                            text="Karachi"
                            />

                <LineChart
                    style={{ height: 200 }}
                    data={this.state.dummyData}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={{ top: 20, bottom: 20 }}
                >
                    <Grid />
            </LineChart>

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:-20,marginBottom:20}}>
            <Text>Oct</Text>
            <Text>Nov</Text>
            <Text>Dec</Text>
            </View>
           
                
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
        height:HEIGHT / 5,
        borderRadius:5,
        alignItems:'center',
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
        borderBottomColor:'black',
        borderBottomWidth:1,
        width:'100%',
        textAlign:'center',
        padding:10
    },
    mainView:{
        alignItems:'center',
        marginVertical:5
    },
    wrapper: {
        height:160,
        marginBottom:20
    },
    slide1: {
        flex:1,
        marginHorizontal:30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:30,

    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:30,

    },
    btn:{
        backgroundColor:'green',
        borderRadius:20,
        padding:5,
        paddingHorizontal:20,
        marginTop:5
    }
    
})