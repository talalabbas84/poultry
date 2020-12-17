import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput,
    Picker, Dimensions, Image
} from 'react-native'
import Header from '../../../components/header' ;
import colors from '../../../constants/colors';
import AppStyles from '../../../styles' ;
import { LineChart, Grid } from 'react-native-svg-charts'
import { Container, Content, ListItem, Radio, Right, Left } from 'native-base';
import {DatePicker } from 'native-base';
import { Card } from 'native-base';
import { calendar } from '../../../constants/images';

const HEIGHT = Dimensions.get('window').height ;
const WIDTH = Dimensions.get('window').width ;

class Rates extends React.Component{

    state={
        startDate: new Date(),
        EndDate: new Date(),
        selectedCity:'',
        data:[
            {city:'karachi',rate:'123$',cash:'244',supplyrate:'512$'},
            {city:'Islamabad',rate:'123$',cash:'244',supplyrate:'512$'},
            {city:'Lahore',rate:'123$',cash:'244',supplyrate:'512$'},
            {city:'Sialkot',rate:'123$',cash:'244',supplyrate:'512$'},
            

        ],
      
         lahoredata : [50, 40, 30, 25, 14, 4, -35, -51, -60, -73, -83, -90, -95],
         karachiData : [100, 50, -20, 15, 40, 24, -85, 91, 35, 53, -53, 24, 50, -20, -80],
         faislabadData : [-90, -20, 50, 24, -53, 53, -35, 91, 35, 53, -53, 24, 50, -20, -80],
         dummy:[],

    }

    componentDidMount(){
        this.setState({
            dummy:this.state.lahoredata
        })
    }


    // renderItem=({item})=>{
    //     return(
    //         <View style={[styles.column,{marginVertical:0}]}>


    //         <Text>{item.city}</Text>
    //         <Text style={{borderLeftColor:'silver',borderLeftWidth:1}} >{item.rate}</Text>
    //         <Text>{item.cash}</Text>
    //         <Text>{item.supplyrate}</Text>

    //     </View>
    //     )
    // }
    startDate(newDate) {
        this.setState({ startDate: newDate });
      }
      EndDate(newDate) {
        this.setState({ EndDate: newDate });
      }

      changeGraph=(item)=>{
        this.setState({selectedCity:item,dummy:this.state.karachiData})
      }
      renderItem=({item})=>{
        return(
            <TouchableOpacity
           // onPress={()=> this.changeData(item.title1)}
            
            style={styles.mainView}>
                <Card style={[styles.card,{elevation:10}]}>
                <Text style={styles.text}>185</Text>
                    <Text style={[styles.text,{color:'red',fontSize:18,fontWeight:'bold'}]}>{item.city}</Text>

                    <Text>Open - Close</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.white}>DOC</Text>
                        <Text style={styles.white}>55.5</Text>

                    </TouchableOpacity>
                    </Card>
                   

            </TouchableOpacity>

        )
    }
    

    render(){
        const {selectedCity} = this.state ;
        

        return(
            <View style={{flex:1}}>
                    <Header navigation={this.props.navigation} back title="گراف"/>
                {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>

                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={styles.checkBox}></View>
                            <Text>Karachi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={styles.checkBox}></View>
                            <Text>Islamabad</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={styles.checkBox}></View>
                            <Text>Lahore</Text>
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,marginVertical:10}}>

                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={styles.checkBox}></View>
                            <Text>Sialkot  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={styles.checkBox}></View>
                            <Text>RawalPindi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={styles.checkBox}></View>
                            <Text>Lahore</Text>
                        </TouchableOpacity>
                </View> */}
                   
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginHorizontal:5}}>

                    <Text>1</Text>
                    <Text style={{marginVertical:10}}>2</Text>
                    <Text>3</Text>
                    <Text style={{marginVertical:10}}>4</Text>
                    <Text>5</Text>
                    <Text style={{marginVertical:10}}>6</Text>
                </View>

                <LineChart
                style={{ height: 200 ,width:'85%',marginHorizontal:5}}
                data={this.state.dummy}
                svg={{ stroke: 'red',width:2,strokeWidth:3 }}
                contentInset={{ top: 20, bottom: 20,flex:1 }}  >
                <Grid />
               </LineChart>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:-15}}>
                

                    <Text style={{color:'transparent'}}>June</Text>
                    <Text style={{marginHorizontal:10}}>July</Text>
                    <Text>August</Text>
                    <Text style={{marginHorizontal:10}}>September</Text>
                    <Text>October</Text>
                    <Text style={{marginHorizontal:10}}>November</Text>
                </View>

                   
                <View style={[AppStyles.line,{marginVertical:20}]}></View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>

                    <Image style={{width:20,height:20,resizeMode:'contain'}} source={calendar}/>
                <DatePicker 
                                        datePickerBg="black"
                                        color="black"
                                        defaultDate={new Date(2018, 4, 4)}
                                        minimumDate={new Date(2018, 1, 1)}
                                        maximumDate={new Date(2018, 12, 31)}
                                        locale={"ar"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        placeHolderText="Start Date"
                                        textStyle={{ color: "black" }}
                                        placeHolderTextStyle={{ color: "grey" }}
                                        onDateChange={()=>this.startDate}
                                    />
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>

<Image style={{width:20,height:20,resizeMode:'contain'}} source={calendar}/>

                 
                 <DatePicker 
                                        datePickerBg="black"
                                        color="black"
                                        defaultDate={new Date(2018, 4, 4)}
                                        minimumDate={new Date(2018, 1, 1)}
                                        maximumDate={new Date(2018, 12, 31)}
                                        locale={"ar"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        placeHolderText="End Date"
                                        textStyle={{ color: "black" }}
                                        placeHolderTextStyle={{ color: "grey" }}
                                        onDateChange={()=>this.EndDate}
                                    />

</View> 
                    <Picker
                                        selectedValue={selectedCity}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => 
                                                this.changeGraph(itemValue)}
                                               // this.setState({selectedCity:itemValue})}
                                        >
                                            <Picker.Item label="کراچی" value="کراچی" />
                                            <Picker.Item label="لاہور" value="لاہور" />
                                            <Picker.Item label="اسلام آباد" value="اسلام آباد" />
                                            <Picker.Item label="سیالکوٹ" value="سیالکوٹ" />
                                        </Picker> 
            </View>


          

             

                    {/* <View style={styles.column}>
                        <View>
                        <Text>برائلر</Text>
                        <Text>شرح</Text>
                        </View>
                        
                        <View>
                        <Text>انڈہ</Text>
                        <Text>شرح</Text>
                        </View>
                        <View>
                        <Text>ایک دن</Text>
                        <Text>پرانا چکن</Text>
                        </View>
                        <View>
                        <Text>منڈی</Text>
                        <Text>شرح</Text>
                        </View>

                    </View>

                    <View style={AppStyles.line}></View> */}

                {/* <FlatList
                style={styles.FlatListStyles}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(key,index) => index.toString()}
                /> */}

                {/* <View style={{flexDirection:'row',height:'100%'}}>
                    <View style={{marginRight:10,padding:10,flex:1}}>
                        <Text style={styles.text}>54</Text>
                        <Text style={styles.text}>4338</Text>
                        <Text style={styles.text}>568</Text>
                        <Text style={styles.text}>4092</Text>
                        <Text style={styles.text}>113</Text>
                        <Text style={styles.text}>3596</Text>
                    </View>
                    
                    <View style={{height:'100%',width:1,backgroundColor:'silver'}}></View>
                    <View style={{marginRight:10,padding:10,flex:1}}>
                        <Text style={styles.text}>54$</Text>
                        <Text style={styles.text}>4338$</Text>
                        <Text style={styles.text}>568$</Text>
                        <Text style={styles.text}>4092$</Text>
                        <Text style={styles.text}>113$</Text>
                        <Text style={styles.text}>3596$</Text>
                    </View>
                    <View style={{height:'100%',width:1,backgroundColor:'silver'}}></View>
                    <View style={{marginRight:10,padding:10,flex:1}}>
                        <Text style={styles.text}>285</Text>
                        <Text style={styles.text}>547</Text>
                        <Text style={styles.text}>3199</Text>
                        <Text style={styles.text}>1512</Text>
                        <Text style={styles.text}>4310</Text>
                        <Text style={styles.text}>85</Text>
                    </View>
                    <View style={{height:'100%',width:1,backgroundColor:'silver'}}></View>
                    <View style={{marginRight:10,padding:10,flex:1}}>
                        <Text style={styles.text}>513$</Text>
                        <Text style={styles.text}>1874$</Text>
                        <Text style={styles.text}>1998$</Text>
                        <Text style={styles.text}>364$</Text>
                        <Text  style={styles.text}>1679$</Text>
                        <Text style={styles.text}>190$</Text>
                    </View>


                </View> */}
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
 export default Rates ;

 const styles = StyleSheet.create({

    boiler:{
        alignSelf:'center'
    },
    FlatListStyles:{
        marginHorizontal:10,
        alignSelf:'center'
    },
    white:{
        color:'white',
        fontWeight:'bold'
    },
    column:{
        justifyContent:'space-between',
        marginHorizontal:20,
        alignItems:'center',
        flexDirection:'row',
    },
    text:{
        marginVertical:5,
        color:colors.grey
    },
    checkBox:{
        borderColor:'black',
        borderWidth:1,
        width:10,
        height:10,
        marginHorizontal:5
    },
    picker:{
        borderWidth:1,
        alignSelf:'center',
        marginVertical:5,
        width:'35%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },
    card:{
        width: WIDTH / 2.8  ,
        height:HEIGHT / 4,
        borderRadius:10,
        alignItems:'center',
        marginHorizontal:30,
        marginRight:15,
        marginLeft:15,
        marginTop:5,
        marginBottom:5,
        margin:5,
    },
    mainView:{
        alignItems:'center',
        marginVertical:5
    },
    btn:{
        backgroundColor:'red',
        borderRadius:20,
        padding:5,
        paddingHorizontal:20,
        marginTop:5
    }
    
 
 })
