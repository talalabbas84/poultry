import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Picker,
  StyleSheet,
  ScrollView,
  Image,
  Title,
} from 'react-native';
import Header from '../../components/header';
import CustomTextInput from '../../components/textInput';
import colors from '../../constants/colors';
import Button from '../../components/button';
import axios from 'axios';

import {
  phone,
  circle,
  city,
  downArrow,
  weight,
  marker,
  camera,
} from '../../constants/images';
import {Card} from 'native-base';
import AppStyles from '../../appStyles/styles';
import AsyncStorage from '@react-native-community/async-storage';
class EditAd extends React.Component {
  route;

  params = this.props.route.params;
  state = {
    showWeight: true,
    showType: true,
    showRate: true,
    showLess: true,
    showAddress: true,
    showCity: true,
    showPhone: true,
    showGrade: false,
    id: this.params.id,
    user_id: this.params.user_id,
    rent: this.params.rent,
    price: this.params.price,
    capacity: this.params.capacity,
    type: '2',
    date: this.params.date,
    location: this.params.location,
    phone_no: this.params.phone_no,
    city_id: this.params.city_id,
    skill: this.params.skill,
    city: [],
  };

  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    // alert('ds');
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

  editPost = async () => {
    // edit the post here

    const body = JSON.stringify({
      id: this.state.id,
      user_id: await AsyncStorage.getItem('user_id'),

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

    axios({
      method: 'post',
      url: 'https://www.pakpoultryhub.com/api/shed_edit_submit.php',
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        console.log(response.data);
        // alert('suxxe');
        //handle success
        // alert('success');
        // console.log(response.data);r
        alert('Post edit Successfully');
        // await AsyncStorage.setItem('token', response.data.token);
        this.props.navigation.navigate('myAdsShed');
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });
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
      selectedNasal,
      selectedGender,
      selectedCity,
    } = this.state;

    return this.state.city && this.state.city.length > 0 ? (
      <View>
        <ScrollView>
          <Header
            back
            navigation={this.props.navigation}
            title="Edit Shed Ad"
          />
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

          <View style={{marginBottom: 50, marginTop: 20}}>
            <Button
              red
              style={styles.button}
              title="ترمیم"
              onPress={this.editPost}
            />
          </View>
          <View style={{margin: 10}} />
        </ScrollView>
      </View>
    ) : null;
  }
}

export default EditAd;

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

  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },

  border: {
    borderBottomColor: '#181818',
    borderBottomWidth: 0.5,
  },

  header: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },

  button: {
    color: 'green',
  },
});
