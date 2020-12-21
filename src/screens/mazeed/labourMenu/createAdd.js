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
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import {
  phone,
  circle,
  city,
  downArrow,
  weight,
  marker,
  camera,
} from '../../../constants/images';

class Create extends React.Component {
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

    capacity: null,
    city_id: null,
    date: new Date().toString().slice(4, 15),
    images: '',
    age: null,
    category_id: null,
    exprience: null,
    id: null,
    like: null,
    location: null,
    name: null,
    phone_no: null,
    skill: null,
    user_id: null,
    view: null,
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
    const body = JSON.stringify({
      user_id: this.state.user_id,
      category_id: this.state.category_id,
      city_id: this.state.city_id ? this.state.city_id : this.state.city[0].id,
      age: this.state.age,
      skill: this.state.skill,
      exprience: this.state.exprience,
      phone_no: this.state.phone_no,
      location: this.state.location,
      like: this.state.like,
      view: this.state.view,
      date: this.state.date,
      images: this.state.images,
    });
    // alert('dsads');
    axios({
      method: 'post',
      url: 'https://www.pakpoultryhub.com/api/boiler_post.php',
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        this.setState({
          ...this.state,
          weight: null,
          type: null,
          rate: null,
          less_on_cash: '',
          address: '',
          phone_no: '',
          location: '',
        });
        alert('Post added Successfully');
        this.props.navigation.navigate('Available');
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

          <View>
            <Text style={styles.text}>نام درج کریں</Text>
            <CustomTextInput
              image={weight}
              placeholder="Type Here"
              onChangeText={(e) => this.setState({...this.state, name: e})}
              value={this.state.name}
            />
          </View>

          {showType && (
            <View>
              <Text style={styles.text}>مہارت درج کریں</Text>
              <CustomTextInput
                image={circle}
                placeholder="سوپروایزر/نائب سپروائزر/باورچی/ورکر/چوکیدار"
                onChangeText={(e) => this.setState({...this.state, skill: e})}
                value={this.state.skill}
              />
            </View>
          )}

          {showRate && (
            <View>
              <Text style={styles.text}>تجربہ درج کرے</Text>
              <CustomTextInput
                image={circle}
                placeholder="کوئی نہیں/ایک سال/دو سال/تین سال"
                onChangeText={(e) =>
                  this.setState({...this.state, exprience: e})
                }
                value={this.state.exprience}
              />
            </View>
          )}

          {showPhone && (
            <View>
              <Text style={styles.text}>فون نمبر درج کریں</Text>
              <CustomTextInput
                keyboardType="numeric"
                image={phone}
                onChangeText={(e) =>
                  this.setState({...this.state, phone_no: e})
                }
                value={this.state.phone_no}
                placeholder="eg.03xxxxxxx"
              />
            </View>
          )}

          {showGrade && (
            <View>
              <Text style={styles.text}>عمر درج کریں</Text>
              <CustomTextInput
                image={circle}
                placeholder="عمر درج کریں"
                value={this.state.age}
                onChangeText={(e) => this.setState({...this.state, age: e})}
              />
            </View>
          )}

          <Button red title="پوسٹ" onPress={this.createPost} />
        </ScrollView>
      </View>
    );
  }
}

export default Create;

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
