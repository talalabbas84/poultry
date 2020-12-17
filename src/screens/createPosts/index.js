import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Picker,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import Header from '../../components/header' ;
import CustomTextInput from '../../components/textInput';
import colors from '../../constants/colors';
import Button from '../../components/button' ;
import{
    phone ,
    circle,
    city,
    downArrow,
    weight,
    marker,
    camera
} from '../../constants/images';
import {Card} from 'native-base' ;
const HEIGHT = Dimensions.get('window').height ;

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
        showGrade:false ,
        selectedValue:'',
        selectedCity:'city'
    }


   

    render(){
        const {showWeight,showType,showRate,showLess,showAddress,showCity,showPhone,showGrade,
            selectedValue,selectedCity} = this.state ;
        return(
            <View>
                <ScrollView>

             
                <Header back navigation={this.props.navigation} title="CREATE POST"/>

              {showWeight &&  <View>
                    <Text style={styles.text}>اوسط وزن درج کرے</Text>
                    <CustomTextInput 
                    keyboardType={'numeric'}
                    length={4}
                    image={weight} placeholder="درج کرے"/>
              </View> }

          {showType &&      <View>
                    <Text style={styles.text}>مال کی قسم درج کریں</Text>
                    <Card style={styles.pickerBack}>
                                   <Picker
                                     selectedValue={selectedValue}
                                        style={styles.picker}
                                        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
                                    >
                                        <Picker.Item label="فریش" value="فریش" />
                                        <Picker.Item label="ڈسٹرب" value="ڈسٹرب" />
                                        <Picker.Item label="سی۔بی" value="سی۔بی" />
                                    </Picker>   
                    </Card>
                                
                    
                </View>}

            {showRate &&<View>
                 <Text style={styles.text}>جس شہر کے ریٹ پر مال سیل کرنا</Text>
                       <Card style={styles.pickerBack}>
                                    <Picker
                                        selectedValue={selectedCity}
                                            style={styles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({selectedCity:itemValue})}
                                        >
                                            <Picker.Item label="کراچی" value="کراچی" />
                                            <Picker.Item label="لاہور" value="لاہور" />
                                            <Picker.Item label="اسلام آباد" value="اسلام آباد" />
                                            <Picker.Item label="سیالکوٹ" value="سیالکوٹ" />
                                        </Picker>   
                        </Card> 
            </View>}

            

            <View>
                 <Text style={styles.text}>ریٹ مارکیٹ کے مطابق /ریٹ خود درج کریں</Text>
                <CustomTextInput image={circle} placeholder="درج کریں"/>
            </View>
            <View>
                 <Text style={styles.text}>نسل درج کریں</Text>
                <CustomTextInput
                keyboardType="numeric"
                length={2}
                image={circle} placeholder="درج کریں"/>
            </View>
            
        {showLess &&  <View>
                    <Text style={styles.text}>فارم کا پتہ درج کریں</Text>
                    <CustomTextInput image={downArrow} placeholder="پتہ"/>

                </View>}

       {showAddress &&     <View>
                <Text style={styles.text}>فون نمبر درج کریں</Text>
                <CustomTextInput
                length={11}
                keyboardType="numeric"
                image={marker} placeholder="e.g 03xxxxxxx"/>

       </View> }
                
{/*         
        {showCity &&        <View>
                    <Text style={styles.text}>Enter your city</Text>
                    <CustomTextInput image={city} placeholder="Enter your city"/>


                </View>}
                
         {showPhone &&       <View>
                    <Text style={styles.text}>Enter your Phone Number</Text>
                    <CustomTextInput
                    keyboardType='numeric'
                    image={phone} placeholder="eg.03xxxxxxx"/>

                </View>} */}
                
                {/* <Text style={styles.text}>Attach images</Text>

                <TouchableOpacity style={styles.camera}>
                        <Image source={camera}/>
                </TouchableOpacity> */}

                <Text style={[styles.text,{alignSelf:'center',fontSize:12}]}>your post will be deleted automatically after 24 hours</Text>

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
        marginTop:10,
    },
    camera:{
        backgroundColor:colors.lighGrey,
        width:100,
        height:100,
        marginHorizontal:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    picker:{
        borderWidth:1,
        alignSelf:'center',
        marginHorizontal:3,
        marginVertical:5,
        width:'90%',
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    pickerBack:{
        width:'90%',
        height:HEIGHT / 14 ,
        flexDirection:'row',
        borderWidth:2   ,
        borderRadius:4,
        alignSelf:'center',
        marginVertical:5,
        alignItems:'center',
        backgroundColor:colors.lighGrey,
        borderColor:colors.lighGrey

    },
})
