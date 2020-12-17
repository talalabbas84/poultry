import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native'
import colors from '../../constants/colors';
import Header from '../../components/header';
import {  check,uncheck} from "../../constants/images";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ActivityIndicator } from 'react-native-paper';
var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];

export class index extends Component {
 

    state={
        first:'',
        second:'',
        third:'checked',
        fourth:'',
        fifth:'',
        six:'',
        radiobtns:[ ],
        isloading:true


    }

    handleFirst=()=>{
        if(this.state.first === '' || this.state.first === 'unchecked'){
            this.setState({
                first:'checked'
            })
        }
        else{
            this.setState({
                first:'unchecked'
            })
        }
        
    }
    
    handlesecond=()=>{
        if(this.state.second === ''  || this.state.second === 'unchecked'){
            this.setState({
                second:'checked'
            })
        }
        else{
            this.setState({
                second:'unchecked'
            })
        }
        
    }
    handleThird=()=>{
        if(this.state.third === '' || this.state.third === 'unchecked'){
            this.setState({
                third:'checked'
            })
        }
        else{
            this.setState({
                third:'unchecked'
            })
        }
        
    }
    handlefourth=()=>{
        if(this.state.fourth === '' || this.state.fourth === 'unchecked'){
            this.setState({
                fourth:'checked'
            })
        }
        else{
            this.setState({
                fourth:'unchecked'
            })
        }
        
    }
    handlefifth=()=>{
        if(this.state.fifth === '' || this.state.fifth === 'unchecked'){
            this.setState({
                fifth:'checked'
            })
        }
        else{
            this.setState({
                fifth:'unchecked'
            })
        }
        
    }
    handleSize=()=>{
        if(this.state.six === '' || this.state.six === 'unchecked'){
            this.setState({
                six:'checked'
            })
        }
        else{
            this.setState({
                six:'unchecked'
            })
        }
        
    }

    componentDidMount(){
        this.getCitites()
    }
    getCitites = () => {
        fetch('https://www.pakpoultryhub.com/api/city.php')
             .then((response) => response.json())
             .then((json) => {
                 this.setState({
                    radiobtns:json,
                    isloading:false
                 })
           
             })
             .catch((error) => {
               console.error(error);
             });
         };


    // handlingRadioBtn=(first,second,third,fourth,fifth,six)=>{
    //     this.setState({
    //         first, second, third, fourth, fifth, six
    //     })

    // }
    render() {
        return (
            <View>
                 <Header title="شہر" back navigation={this.props.navigation} />
                 <View style={{justifyContent:'space-between',marginHorizontal:10}}>
                 {this.state.isloading && <ActivityIndicator size={'large'} color="red" />}
<View style={{flexDirection:'row'}}>
<View style={{width:50}}>
            <RadioForm

            buttonInnerColor={'red'}
            buttonColor={'red'}
                    radio_props={this.state.radiobtns}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                    />
           
                   
            </View>

            <View style={{backgroundColor:'transparent',marginVertical:1}}>
                        {this.state.radiobtns.map((item,i)=>{
                            if(i === 0){
                                return  <Text style={{marginVertical:0,fontSize:21}}>{item.city_name}</Text>
                            }
                            else{
                                return  <Text style={{marginVertical:4.2,fontSize:21}}>{item.city_name}</Text>
                            }
                          
                        })}
            </View>
</View>
           
               

                
{/* 
                            <TouchableOpacity 
                             onPress={()=> this.handleFirst()}
                            style={{flexDirection:'row',alignItems:'center' ,marginVertical:5}}>
                            <RadioButton
                            color="red"
                             theme={{ colors: 'red',background:'red'}}
                                value="first"
                                status={this.state.first }
                                onPress={()=> this.handleFirst()}
                               //onPress={()=> this.handlingRadioBtn('checked','unchecked','unchecked','unchecked','unchecked','unchecked')}
                                // onPress={() => this.setState({Radio1:'first',Radio2:''})}
                            />
                                <Text style={styles.text}>Karachi</Text>
                            </TouchableOpacity> */}

                            {/* <TouchableOpacity
                            onPress={()=> this.handlesecond()}
                            style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
                            <RadioButton
                              color="red"
                             theme={{ colors: 'red',background:'red'}}
                                value="second"
                                status={this.state.second }
                              onPress={()=> this.handlesecond()}
                                // onPress={()=> this.handlingRadioBtn('unchecked','checked','unchecked','unchecked','unchecked','unchecked')}
                                // onPress={() => this.setState({Radio1:'first',Radio2:''})}
                            />
                                <Text style={styles.text}>Islamabad</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            onPress={()=> this.handleThird()}
                            style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
                            <RadioButton
                              color="red"
                             theme={{ colors: 'red',background:'red'}}
                                value="third"
                                status={this.state.third }
                                onPress={()=> this.handleThird()}
                                // onPress={()=> this.handlingRadioBtn('unchecked','unchecked','checked','unchecked','unchecked','unchecked')}
                                // onPress={() => this.setState({Radio1:'first',Radio2:''})}
                            />
                                <Text style={styles.text}>Lahore</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{justifyContent:'space-between',marginHorizontal:10,marginVertical:0}}> */}

                            {/* <TouchableOpacity 
                             onPress={()=> this.handlefourth()}
                            style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
                            <RadioButton
                              color="red"
                              theme={{ colors: 'red',background:'red'}}
                                value="fourth"
                                status={this.state.fourth }
                                onPress={()=> this.handlefourth()}
                                //  onPress={()=> this.handlingRadioBtn('unchecked','unchecked','unchecked','checked','unchecked','unchecked')}
                                // onPress={() => this.setState({Radio1:'first',Radio2:''})}
                            />
                                <Text style={styles.text}>Sialkot  </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                             onPress={()=> this.handlefifth()}
                            style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
                            <RadioButton
                              color="red"
                             theme={{ colors: 'red',background:'red'}}
                                value="fifth"
                                status={this.state.fifth }
                                onPress={()=> this.handlefifth()}
                                // onPress={()=> this.handlingRadioBtn('unchecked','unchecked','unchecked','unchecked','checked','unchecked')}
                                // onPress={() => this.setState({Radio1:'first',Radio2:''})}
                            />
                                <Text style={styles.text}>RawalPindi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                             onPress={()=> this.handleSize()}
                            style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
                            <RadioButton
                              color="red"
                             theme={{ colors: 'red',background:'red'}}
                                value="six"
                                status={this.state.six }
                                onPress={()=> this.handleSize()}
                                //  onPress={()=> this.handlingRadioBtn('unchecked','unchecked','unchecked','unchecked','unchecked','checked')}
                                // onPress={() => this.setState({Radio1:'first',Radio2:''})}
                            />
                                <Text style={styles.text}>Quetta</Text>
                            </TouchableOpacity> */}
                    </View>
            </View>
        )
    }
}

export default index;

const styles = StyleSheet.create({

    boiler:{
        alignSelf:'center'
    },
    column:{
        justifyContent:'space-between',
        marginHorizontal:20,
        alignItems:'center',
        flexDirection:'row',
    },
    text:{
        marginVertical:10,
        fontSize:18,
    },
    checkBox:{
        borderColor:'black',
        borderWidth:1,
        width:10,
        height:10,
        marginHorizontal:5,
        borderRadius:5
    }
 
 })

