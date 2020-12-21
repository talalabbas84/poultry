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
import Header from '../../components/header';
import CustomTextInput from '../../components/textInput';
import colors from '../../constants/colors';
import Button from '../../components/button';
import {
  phone,
  circle,
  city,
  downArrow,
  weight,
  marker,
  camera,
} from '../../constants/images';
import AppStyles from '../../appStyles/styles';
import {Card} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

class Create extends React.Component {
  userId;
  state = {
    from: '',

    showWeight: true,
    showType: true,
    showRate: true,
    showLess: true,
    showAddress: true,
    showCity: true,
    showPhone: true,
    showGrade: false,

    user_id: null,

    capacity: null,
    description: '',
    price: '',
    rent: '',

    category_id: 5, // TODO: check id
    city_id: null,
    weight: null,
    type: null,
    rate: null,
    lessOnCash: '',
    address: '',
    number: '',
    location: '',
    date: new Date().toString().slice(4, 15),
    name: '',
    images: '',
    view: '',
    city_name: '',
    city: [],
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
      description: this.state.description,
      city_id: this.state.city_id ? this.state.city_id : this.state.city[0].id,
      rent: this.state.rent,
      price: this.state.price,
      capacity: this.state.capacity,
      type: '2',
      phone_no: this.state.number,
      location: this.state.location,
      like: 'asdad',
      view: 'asdad',
      date: this.state.date,
      images: 'm2.jpg',
    });

    console.log(body);
    // alert('dsads');
    axios({
      method: 'post',
      url: 'https://www.pakpoultryhub.com/api/shed_post.php',
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        this.setState({
          ...this.state,
          rent: null,
          type: null,
          price: null,
          capacity: '',
          address: '',
          phone_no: '',
          location: '',
          description: '',
        });
        alert('Post added Successfully');
        this.props.navigation.navigate('shedAddShow');
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });

    // all varaiables are here, just trim the date
  };

  render() {
    // alert('dss');
    // alert(this.state.user_id);
    // alert(this.state.city_name);
    // console.log(this.state.city_name, 'cityyyyyyyyyyy nameeeeeeeeee');
    const {
      showWeight,
      showType,
      showRate,
      showLess,
      showAddress,
      showCity,
      showPhone,
      showGrade,
      selectedNasal,
      selectedGender,
      selectedCity,
    } = this.state;
    return this.state.city && this.state.city.length > 0 ? (
      <View>
        <ScrollView>
          <Header back navigation={this.props.navigation} title="Shed Ad" />
          {showRate && (
            <View>
              <Text style={styles.text}>Capacity</Text>
              <CustomTextInput
                onChangeText={(e) =>
                  this.setState({...this.state, capacity: e})
                }
                image={circle}
                keyboardType="numeric"
                placeholder="Capacity"
                value={this.state.capacity}
              />
            </View>
          )}

          {showLess && (
            <View>
              <Text style={styles.text}>Price</Text>
              <CustomTextInput
                onChangeText={(e) => this.setState({...this.state, price: e})}
                keyboardType="numeric"
                placeholder="price"
                value={this.state.price}
              />
            </View>
          )}

          {showLess && (
            <View>
              <Text style={styles.text}>Rent</Text>
              <CustomTextInput
                onChangeText={(e) => this.setState({...this.state, rent: e})}
                keyboardType="numeric"
                placeholder="rent"
                value={this.state.rent}
              />
            </View>
          )}

          <View>
            <Text style={styles.text}>
              ریٹ شہر مارکیٹ کے مطابق خود درج کریں
            </Text>
            <Card style={AppStyles.pickerBack}>
              <Picker
                selectedValue={this.state.city_id}
                style={AppStyles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({...this.state, city_id: itemValue})
                }>
                {this.state.city.map((city) => (
                  <Picker.Item label={city.city_name} value={city.id} />
                ))}
              </Picker>
            </Card>
          </View>

          {showPhone && (
            <View>
              <Text style={styles.text}>فون نمبر درج کریں</Text>
              <CustomTextInput
                keyboardType="numeric"
                image={phone}
                onChangeText={(e) => this.setState({...this.state, number: e})}
                placeholder="eg.03xxxxxxx"
                value={this.state.number}
              />
            </View>
          )}

          {showPhone && (
            <View>
              <Text style={styles.text}>Description</Text>
              <CustomTextInput
                onChangeText={(e) =>
                  this.setState({...this.state, description: e})
                }
                value={this.state.description}
              />
            </View>
          )}

          <Text style={[styles.text, {alignSelf: 'center', fontSize: 12}]}>
            your post will be deleted automatically after 24 hours
          </Text>

          <Button red title="پوسٹ" onPress={() => this.createPost()} />
        </ScrollView>
      </View>
    ) : null;
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
