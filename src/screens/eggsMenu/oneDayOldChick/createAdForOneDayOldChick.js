import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Picker,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../../../components/header';
import CustomTextInput from '../../../components/textInput';
import colors from '../../../constants/colors';
import Button from '../../../components/button';
import {
  phone,
  circle,
  city,
  downArrow,
  weight,
  marker,
  camera,
} from '../../../constants/images';
import {Card} from 'native-base';
import AppStyles from '../../../appStyles/styles';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

class oneDayOldChick extends React.Component {
  state = {
    from: '',

    showWeight: true,
    showType: true,
    showRate: true,
    showLess: true,
    showAddress: true,
    showCity: true,
    showPhone: true,
    showGrade: true,
    subCategory: this.props.route.params.subCategory,
    nasal: '',

    user_id: null,
    category_id: '3', // TODO: check id
    city_id: null,
    weight: null,
    type: null,
    grade: '',
    lessOnCash: '',
    address: '',
    number: '',
    location: '',
    date: new Date().toString().slice(4, 15),
    images: '',
    view: '',
    like: '',
    enter_grade: null,
  };

  constructor(props) {
    super(props);

    this.getUserid();
  }

  getUserid = async function name(params) {
    this.setState({
      user_id: await AsyncStorage.getItem('user_id'),
    });
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const res2 = await axios.get(
        `https://www.pakpoultryhub.com/api/city.php`,
      );
      // console.log(res.data);

      this.setState({...this.setState, city: res2.data});
      // alert('success');
    } catch (err) {
      // alert(err.message);
    }
  };

  createPost = () => {
    alert('hello');

    console.log(this.state.subCategory);
    console.log(this.props.route.params);
    const body = JSON.stringify({
      user_id: this.state.user_id,
      category_id: this.state.category_id,
      sub_category_id: this.state.subCategory,
      city_id: this.state.city_id ? this.state.city_id : this.state.city[0].id,
      enter_grade: this.state.enter_grade,
      weight: this.state.weight,
      type: this.state.type,
      address: this.state.address,
      phone_no: this.state.number,
      location: this.state.location,
      like: 'asdad',
      view: 'asdad',
      date: this.state.date,
    });

    console.log(body);

    axios({
      method: 'post',
      url: 'https://www.pakpoultryhub.com/api/boiler_post.php',
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        console.log(response.data);
        this.setState({
          ...this.state,
          weight: null,
          type: null,
          enter_grade: null,
          less_on_cash: '',
          address: '',
          phone_no: '',
          location: '',
        });
        alert('Post added Successfully');
        this.props.navigation.navigate('OneDayOldChickShowAdd');
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });

    // all varaiables are here, just trim the date
  };

  render() {
    const {
      showWeight,
      showType,
      showRate,
      showLess,
      showAddress,
      showCity,
      showPhone,
      showGrade,
    } = this.state;
    return (
      <View>
        <ScrollView>
          <Header back navigation={this.props.navigation} title="CREATE POST" />

          {showType && (
            <View>
              <Text style={styles.text}>انڈے کا وزن درج کرے</Text>
              <CustomTextInput
                keyboardType="numeric"
                image={circle}
                onChangeText={(e) => this.setState({...this.state, weight: e})}
                placeholder="فریش/کیج"
              />
            </View>
          )}

          <View>
            <Text style={styles.text}>
              ریٹ شہر مارکیٹ کے مطابق خود درج کریں
            </Text>
            <Card style={AppStyles.pickerBack}>
              <Picker
                selectedValue={this.state.location}
                style={AppStyles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({...this.state, location: itemValue})
                }>
                <Picker.Item label="کراچی" value="کراچی" />
                <Picker.Item label="لاہور" value="لاہور" />
                <Picker.Item label="اسلام آباد" value="اسلام آباد" />
                <Picker.Item label="سیالکوٹ" value="سیالکوٹ" />
              </Picker>
            </Card>
          </View>

          {showAddress && (
            <View>
              <Text style={styles.text}>فارم کا پتہ درج کریں</Text>
              <CustomTextInput
                onChangeText={(e) => this.setState({...this.state, address: e})}
                image={marker}
                placeholder="درج کرے"
              />
            </View>
          )}

          <View>
            <Text style={styles.text}>grade</Text>
            <CustomTextInput
              keyboardType="numeric"
              onChangeText={(e) =>
                this.setState({...this.state, enter_grade: e})
              }
              image={marker}
              placeholder="درج کرے"
            />
          </View>

          {showAddress && (
            <View>
              <Text style={styles.text}> درج کریم likes </Text>
              <CustomTextInput
                keyboardType="numeric"
                onChangeText={(e) => this.setState({...this.state, like: e})}
                image={marker}
                placeholder="درج کرے"
              />
            </View>
          )}

          {showPhone && (
            <View>
              <Text style={styles.text}>فون نمبر درج کریں</Text>
              <CustomTextInput
                keyboardType="numeric"
                image={phone}
                placeholder="eg.03xxxxxxx"
                onChangeText={(e) => this.setState({...this.state, number: e})}
              />
            </View>
          )}

          {/* <Text style={styles.text}>Attach images</Text>

                <TouchableOpacity style={styles.camera}>
                        <Image source={camera}/>
                </TouchableOpacity>

                <Text style={[styles.text,{alignSelf:'center',fontSize:12}]}>your post will be deleted automatically after 24 hours</Text> */}

          <Button red title="پوسٹ" onPress={this.createPost} />
        </ScrollView>
      </View>
    );
  }
}

export default oneDayOldChick;

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
    marginHorizontal: 20,
    marginTop: 10,
  },
  camera: {
    backgroundColor: colors.lighGrey,
    width: 100,
    height: 100,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
