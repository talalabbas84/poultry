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
    }




    render(){
        const {showWeight,showType,showRate,showLess,showAddress,showCity,showPhone,showGrade} = this.state ;
        return(
            <View>
                <ScrollView>

             
                <Header back navigation={this.props.navigation} title="CREATE POST"/>

                <View>
                    <Text style={styles.text}>نام درج کریں</Text>
                    <CustomTextInput image={weight} placeholder="Type Here"/>
              </View>

          {showType &&      <View>
                    <Text style={styles.text}>مہارت درج کریں</Text>
                    <CustomTextInput image={circle} placeholder="سوپروایزر/نائب سپروائزر/باورچی/ورکر/چوکیدار"/>
                </View>}

            {showRate &&<View>
                 <Text style={styles.text}>تجربہ درج کرے</Text>
                <CustomTextInput image={circle} placeholder="کوئی نہیں/ایک سال/دو سال/تین سال"/>
            </View>}

                         
         {showPhone &&       <View>
                    <Text style={styles.text}>فون نمبر درج کریں</Text>
                    <CustomTextInput
                    keyboardType='numeric'
                    image={phone} placeholder="eg.03xxxxxxx"/>

                </View>}

            
            {showGrade &&<View>
                 <Text style={styles.text}>عمر درج کریں</Text>
                <CustomTextInput image={circle} placeholder="عمر درج کریں"/>
            </View>}

        {/* {showLess &&  <View>
                    <Text style={styles.text}> درج کریں</Text>
                    <CustomTextInput image={downArrow} placeholder="Enter less(e.g Rs.5)"/>

                </View>} */}

      
                
    
   
                
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
