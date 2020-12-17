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
import {Card} from 'native-base';

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
        selectedNasal:'',
        selectedGender:'',
        selectedCity:''
    }


   

    render(){
        const {showWeight,showType,showRate,showLess,showAddress,showCity,showPhone,showGrade,
            selectedNasal,selectedGender,selectedCity} = this.state ;
        return(
            <View>
                <ScrollView>

             
                <Header back navigation={this.props.navigation} title="Broiler Add"/>
                {showRate &&<View>
                 <Text style={styles.text}>ہیچری کا نام درج کریں</Text>
                <CustomTextInput
                image={circle} placeholder="نام"/>
            </View>}


              {showWeight &&  <View>
                    <Text style={styles.text}>چکس گریڈ درج کریں</Text>
                    <Card style={AppStyles.pickerBack}>
                                    <Picker
                                        selectedValue={selectedNasal}
                                            style={AppStyles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({selectedNasal:itemValue})}
                                        >
                                            <Picker.Item label="سٹارٹر" value=" سٹارٹر" />
                                            <Picker.Item label="A گریڈ" value="A     گریڈ" />
                                            <Picker.Item label=" A++ گریڈ" value="A++ گریڈ" />
                                        </Picker>   
                        </Card> 
                  
              </View> }

              {showRate &&<View>
                 <Text style={styles.text}>چیکس کی تعداد</Text>
                <CustomTextInput
                length={5}
                keyboardType="numeric"
                image={circle} placeholder=""/>
            </View>}

            <View>
                <Text style={styles.text}>ریٹ شہر مارکیٹ کے مطابق خود درج کریں</Text>
                <Card style={AppStyles.pickerBack}>
                <Picker
                                        selectedValue={selectedCity}
                                            style={AppStyles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({selectedCity:itemValue})}
                                        >
                                            <Picker.Item label="کراچی" value="کراچی" />
                                            <Picker.Item label="لاہور" value="لاہور" />
                                            <Picker.Item label="اسلام آباد" value="اسلام آباد" />
                                            <Picker.Item label="سیالکوٹ" value="سیالکوٹ" />
                                        </Picker>  
                    </Card>
            </View> 



            {showRate &&<View>
                 <Text style={styles.text}>وزن در کرے</Text>
                <CustomTextInput
                length={4}
                keyboardType="numeric"
                image={circle} placeholder="گرام"/>
            </View>}

            

            <View>
                 <Text style={styles.text}>ریٹ مارکیٹ کے مطابق /ریٹ خود درج کریں</Text>
                <CustomTextInput image={circle} placeholder="درج کریں"/>
            </View>
            {showPhone &&       <View>
                    <Text style={styles.text}>فون نمبر درج کریں</Text>
                    <CustomTextInput
                    keyboardType='numeric'
                    image={phone} placeholder="eg.03xxxxxxx"/>

                </View>} 
    
{/* 
            <View>
                <Text style={styles.text}>تعداد درج کریں</Text>
                <CustomTextInput
                length={5}
                image={marker} placeholder="درج کریں"/>

            </View> 
          
            <View>
                <Text style={styles.text}>عمر درج کریں</Text>
                <CustomTextInput
                image={marker} placeholder="دن درج کریں"/>

            </View> 
            <View>
                <Text style={styles.text}>فارم کا پتہ درج کریں</Text>
                <CustomTextInput
                image={marker} placeholder="پتہ درج کریں"/>

            </View> 

            <View>
                <Text style={styles.text}>فون نمبر درج کریں</Text>
                <CustomTextInput
                image={marker} placeholder=" درج کریں"/>

            </View> 

            <View>
                <Text style={styles.text}>تفصیل درج کریں</Text>
                <CustomTextInput
                image={marker} placeholder=" درج کریں"/>

            </View> 

            */}
                
{/*         
        {showCity &&        <View>
                    <Text style={styles.text}>Enter your city</Text>
                    <CustomTextInput image={city} placeholder="Enter your city"/>


                </View>}
                
         {showPhone &&       <View>
                    <Text style={styles.text}>فون نمبر درج کریں</Text>
                    <CustomTextInput
                    keyboardType='numeric'
                    image={phone} placeholder="eg.03xxxxxxx"/>

                </View>} */}
                
                    {/* <Text style={styles.text}>تصویر لگائیں</Text>

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

})
