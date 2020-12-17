import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Picker,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import Header from '../../../components/header' ;
import CustomTextInput from '../../../components/textInput';
import colors from '../../../constants/colors';
import Button from '../../../components/button' ;
import{
    phone ,
    circle,
    city,
    downArrow,
    weight,
    marker,
    camera
} from '../../../constants/images';
import AppStyles from '../../../appStyles/styles';
import { Card } from 'native-base';

class Create extends React.Component{

    state={
        from:'',

        showWeight:true,
        showType:true,
        showRate:true,
        showLess:true,
        showAddress:true,
        showCity:true,
        showPhone:true,
        showGrade:true ,
        selectedQism:'',
        selectedstory:''
    }




    render(){
        const {showWeight,showType,showRate,showLess,showAddress,showCity,showPhone,showGrade,selectedQism,
            selectedstory} = this.state ;
        return(
            <View>
                <ScrollView>

             
                <Header back navigation={this.props.navigation} title="CREATE POST"/>

                <View>
                    <Text style={styles.text}>فارم کی قسم درج کریں</Text>
                    <Card style={AppStyles.pickerBack}>
                                    <Picker
                                        selectedValue={selectedQism}
                                            style={AppStyles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({selectedQism:itemValue})}
                                        >
                                            <Picker.Item label="کنٹرول شیڈ" value="کنٹرول شیڈ"/>
                                            <Picker.Item label="سیمی کنٹرول" value="سیمی کنٹرول"/>
                                            <Picker.Item label="اوپن فارم" value="اوپن فارم" />
                                        </Picker>   
                        </Card>
              </View>

          {showType &&      <View>
                    <Text style={styles.text}>فلم سٹوری درج کریں</Text>
                    <Card style={AppStyles.pickerBack}>
                                    <Picker
                                        selectedValue={selectedstory}
                                            style={AppStyles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({selectedQism:itemValue})}
                                        >
                                            <Picker.Item label="سنگل اسٹوری" value="سنگل اسٹوری"
                                            />
                                            <Picker.Item label="ڈبل سٹوری" value="ڈبل سٹوری"/>
                                        </Picker>   
                        </Card>
                </View>}

            {showRate &&<View>
                 <Text style={styles.text}>فارم سائز درج کریں</Text>
                <CustomTextInput image={circle} placeholder="لمبائی x چوڑائی"/>
            </View>}

            
            {showGrade &&<View>
                 <Text style={styles.text}>فارم کپیسٹی درج کریں</Text>
                <CustomTextInput image={circle} placeholder="چوزہ"/>
            </View>}

        {/* {showLess &&  <View>
                    <Text style={styles.text}> درج کریں</Text>
                    <CustomTextInput image={downArrow} placeholder="Enter less(e.g Rs.5)"/>

                </View>} */}

       {showAddress &&     <View>
                <Text style={styles.text}>فارم کرایہ درج کریں</Text>
                <CustomTextInput image={marker} placeholder="فارم کرایہ درج کریں"/>

       </View> }

       {showAddress &&     <View>
                <Text style={styles.text}>شہر درج کریں</Text>
                <CustomTextInput image={marker} placeholder="شہر درج کریں"/>

       </View> }

       {showAddress &&     <View>
                <Text style={styles.text}>فارم کا پتہ درج کرے</Text>
                <CustomTextInput image={marker} placeholder="فارم کا پتہ درج کرے"/>

       </View> }

       {showPhone &&       <View>
                    <Text style={styles.text}>فون نمبر درج کریں</Text>
                    <CustomTextInput
                    keyboardType='numeric'
                    image={phone} placeholder="eg.03xxxxxxx"/>

                </View>}

       
       {showAddress &&     <View>
                <Text style={styles.text}>تفصیل درج کریں</Text>
                <CustomTextInput image={marker} placeholder="درج کریں"/>

       </View> }

       
       {/* {showAddress &&     <View>
                <Text style={styles.text}>فون نمبر درج کریں</Text>
                <CustomTextInput image={marker} placeholder="Enter your local address"/>

       </View> } */}
                
    
                
       
                
                 <Text style={styles.text}>تصویر لگائیں</Text>

                <TouchableOpacity style={styles.camera}>
                        <Image source={camera}/>
                </TouchableOpacity>

             {/*   <Text style={[styles.text,{alignSelf:'center',fontSize:12}]}>your post will be deleted automatically after 24 hours</Text> */}

                <Button red title="پوسٹ"/>
                </ScrollView>

            </View>
        )
    }
}

export default Create ;

const styles = StyleSheet.create({

    text:{
        color:colors.grey,
        marginHorizontal:20,
        marginTop:10
    },
    camera:{
        backgroundColor:colors.lighGrey,
        width:100,
        height:100,
        marginHorizontal:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }
})
