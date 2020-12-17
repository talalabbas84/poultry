import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native'
import Header from '../../components/header' ;
import colors from '../../constants/colors';
import AppStyles from '../../styles' ;
import { LineChart, Grid } from 'react-native-svg-charts'
import { Container, Content, ListItem, Radio, Right, Left } from 'native-base';
import {DatePicker } from 'native-base';
import { ActivityIndicator } from 'react-native-paper';

class Rates extends React.Component{

    state={
        startDate: new Date(),
        EndDate: new Date(),
        date1:[],
        isloading:true,
        data:[
            {city:'karachi',rate:'123$',cash:'244',supplyrate:'512$'},
            {city:'karachi',rate:'123$',cash:'244',supplyrate:'512$'},
      

        ]
    }
    renderItem=({item})=>{
        return(<View style={{flexDirection:'row'}}>
        <View style={styles.row}>
            <Text style={styles.text}>{item.farm_rate}</Text>
        </View>
        
        <View style={{width:1,backgroundColor:'silver'}}></View>
        <View style={styles.row}>
            <Text style={styles.text}>{item.loading}</Text>
        </View>
        <View style={{width:1,backgroundColor:'silver'}}></View>
        <View style={styles.row}>
            <Text style={styles.text}>{item.supply_rate}</Text>
        </View>
        <View style={{width:1,backgroundColor:'silver'}}></View>
        <View style={styles.row}>
            <Text style={styles.text}>{item.city}</Text>
        </View>
        <View style={{width:1,backgroundColor:'silver'}}></View>
        <View style={styles.row}>
            <Text style={styles.text}>{item.date}</Text>
        </View>


    </View>
        //     <View style={[styles.column,{marginVertical:0}]}>


        //     <Text>{item.farm_rate}</Text>
        //     <Text style={{borderLeftColor:'silver',borderLeftWidth:1}} >{item.loading}</Text>
        //     <Text>{item.date}</Text>
        //     <Text>{item.supply_rate}</Text>

        // </View>
       

        )
    }
    startDate(newDate) {
        this.setState({ startDate: newDate });
      }
      EndDate(newDate) {
        this.setState({ EndDate: newDate });
      }

      componentDidMount(){
       //   alert("yes")
          this.getBoilerRate()
      }

      getBoilerRate = () => {
        fetch('https://www.pakpoultryhub.com/api/boiler_rate.php')
             .then((response) => response.json())
             .then((json) => {
                 this.setState({
                    date1:json,
                    isloading:false
                 })
           
             })
             .catch((error) => {
               console.error(error);
             });
         };
   
    

    render(){
        const data = [50, 35, 30, 20, 10, 0, 85, 91, 35, 53, -53, 24, 50, -20, -80]

        return(
            <View style={{flex:1}}>
                    <Header navigation={this.props.navigation} back title="شرح"/>
               
                   
            {/* <View style={{flexDirection:'row',alignItems:'center'}}>
               

                <LineChart
                style={{ height: 200 ,width:'85%',marginHorizontal:5}}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20,flex:1 }}  >
                <Grid />
               </LineChart>
            </View> */}

            {/* <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:-15}}>
                

                    <Text style={{color:'transparent'}}>karachi</Text>
                    <Text style={{marginHorizontal:10}}>karachi</Text>
                    <Text>Lahore</Text>
                    <Text style={{marginHorizontal:10}}>Sialkot</Text>
                    <Text>Islamabad</Text>
                    <Text style={{marginHorizontal:10}}></Text>
                </View> */}

                   

            {/* <View style={{flexDirection:'row',justifyContent:'space-around',marginHorizontal:10}}>
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
                                        placeHolderText="Select Start date"
                                        textStyle={{ color: "black" }}
                                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                                        onDateChange={()=>this.startDate}
                                    />
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
                                        placeHolderText="Select date date"
                                        textStyle={{ color: "black" }}
                                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                                        onDateChange={()=>this.EndDate}
                                    />
            </View>
                    <View style={AppStyles.line}></View> */}

                    <View style={styles.column}>
                        <View>
                        <Text style={styles.red}>برائلر</Text>
                        <Text style={styles.red}>شرح</Text>
                        </View>
                        
                        <View>
                        <Text style={styles.red}>انڈہ</Text>
                        <Text style={styles.red}>شرح</Text>
                        </View>
                        <View>
                        <Text style={styles.red}>ایک دن</Text>
                        <Text style={styles.red}>پرانا چکن</Text>
                        </View>
                        <View>
                      
                        <Text style={styles.red}>شرح</Text>
                        <Text style={styles.red}>شہر</Text>
                        </View>
                        <View>
                        <Text style={styles.red}>منڈی</Text>
                        <Text style={styles.red}>شرح</Text>
                        </View>

                    </View>

                    <View style={AppStyles.line}></View>

                    {this.state.isloading && <ActivityIndicator size={'large'} color="red" />}

                <FlatList
               // style={styles.FlatListStyles}
                data={this.state.date1  }
                renderItem={this.renderItem}
                keyExtractor={(key,index) => index.toString()}
                />

                {/* <View style={{flexDirection:'row',height:'100%'}}>
                    <View style={{marginRight:10,padding:10,flex:1}}>
                        <Text style={styles.text}>54</Text>
                    </View>
                    
                    <View style={{height:'100%',width:1,backgroundColor:'silver'}}></View>
                    <View style={{marginRight:10,padding:10,flex:1}}>
                        <Text style={styles.text}>54$</Text>
                    </View>
                    <View style={{height:'100%',width:1,backgroundColor:'silver'}}></View>
                    <View style={{marginRight:10,padding:10,flex:1}}>
                        <Text style={styles.text}>285</Text>
                    </View>
                    <View style={{height:'100%',width:1,backgroundColor:'silver'}}></View>
                    <View style={{marginRight:10,padding:10,flex:1}}>
                        <Text style={styles.text}>513$</Text>
                    </View>


                </View> */}


            </View>
        )
    }
}
 export default Rates ;

 const styles = StyleSheet.create({

    boiler:{
        alignSelf:'center'
    },
    row:{
        marginRight:10,
        padding:10,
        flex:1,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    column:{
        justifyContent:'space-between',
        marginHorizontal:20,
        alignItems:'center',
        flexDirection:'row',
    },
    text:{
        marginVertical:5,
        color:colors.grey,
        fontSize:12
    },
    checkBox:{
        borderColor:'black',
        borderWidth:1,
        width:10,
        height:10,
        marginHorizontal:5
    },
    red:{
        color:'red',
        fontSize:15,
        fontWeight:'bold'
    }
 
 })
