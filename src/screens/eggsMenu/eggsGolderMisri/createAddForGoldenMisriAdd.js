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
import { Card } from 'native-base';
import AppStyles from '../../../appStyles/styles';

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
        selectedNasal:'',
        selectedCity:''
    }




    render(){
        const {showWeight,showType,showRate,showLess,showAddress,showCity,showPhone,showGrade,selectedCity,
            selectedNasal} = this.state ;
        return(
            <View>
                <ScrollView>

             
                <Header back navigation={this.props.navigation} title="CREATE POST"/>

                <View>
                    <Text style={styles.text}>انڈے کی نسل درج کریں</Text>
                    <Card style={AppStyles.pickerBack}>
                                    <Picker
                                        selectedValue={selectedNasal}
                                            style={AppStyles.picker}
                                            onValueChange={(itemValue, itemIndex) => this.setState({selectedNasal:itemValue})}
                                        >
                                            <Picker.Item label="گولڈن مصری" value=" گولڈن مصری" />
                                            <Picker.Item label="ہائی لائن" value="ہائی لائن" />
                                            <Picker.Item label="اسڑالورپ" value="اسڑالورپ" />
                                            <Picker.Item label="آر آئی آر" value="آر آئی آر " />
                                            <Picker.Item label="اصل" value="اصل" />
                                        </Picker>   
                        </Card>
              </View>

          {showType &&      <View>
                    <Text style={styles.text}>انڈے کا وزن درج کرے</Text>
                    <CustomTextInput image={circle} placeholder="فریش/کیج"/>
                </View>}

            {showRate &&<View>
                 <Text style={styles.text}>ریٹ فی پیٹی/ ریٹ فی نگ</Text>
                <CustomTextInput image={circle} placeholder="درج کرے"/>
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

        {/* {showLess &&  <View>
                    <Text style={styles.text}> درج کریں</Text>
                    <CustomTextInput image={downArrow} placeholder="Enter less(e.g Rs.5)"/>

                </View>} */}

       {showAddress &&     <View>
                <Text style={styles.text}>فارم کا پتہ درج کریں</Text>
                <CustomTextInput image={marker} placeholder="درج کرے"/>

       </View> }
                

       {showAddress &&     <View>
                <Text style={styles.text}>تفصیل درج کریم</Text>
                <CustomTextInput image={marker} placeholder="درج کرے"/>

       </View> }
    
                
         {showPhone &&       <View>
                    <Text style={styles.text}>فون نمبر درج کریں</Text>
                    <CustomTextInput
                    keyboardType='numeric'
                    image={phone} placeholder="eg.03xxxxxxx"/>

                </View>}
                
                {/* <Text style={styles.text}>Attach images</Text>

                <TouchableOpacity style={styles.camera}>
                        <Image source={camera}/>
                </TouchableOpacity>

                <Text style={[styles.text,{alignSelf:'center',fontSize:12}]}>your post will be deleted automatically after 24 hours</Text> */}

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
