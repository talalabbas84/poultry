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
    id: this.params.id,
    age: this.params.age,
    name: this.params.name,
    date: this.params.date,
    exprience: this.params.exprience,
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
      age: this.state.age,
      name: this.state.name,
      category_id: 6,
      experience: this.state.exprience,
      date: this.state.date,
      phone_no: this.state.phone_no,
      city_id: this.state.city_id,
      location: this.state.location,
      skill: this.state.skill,
      images: 'm2.jpg',
    });

    axios({
      method: 'post',
      url: 'https://www.pakpoultryhub.com/api/men_power_update.php',
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
        this.props.navigation.navigate('myAdsManpower');
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });
  };

  render() {
    return this.state.city && this.state.city.length > 0 ? (
      <View>
        <Header
          back
          navigation={this.props.navigation}
          title="اشتھارات ترمیم"
        />

        <ScrollView>
          {/* weight, type rate, less on cash , address, city  */}
          <Text style={styles.title}>Edit Ad</Text>
          <View style={styles.border} />
          <Text style={styles.header}> Name </Text>
          <CustomTextInput
            onChangeText={(e) => this.setState({...this.state, name: e})}
            length={5}
            image={circle}
            placeholder="Name"
            value={'' + this.state.name}
          />
          <Text style={styles.header}> Age </Text>
          <CustomTextInput
            onChangeText={(e) => this.setState({...this.state, age: e})}
            length={5}
            image={circle}
            placeholder="Age"
            value={'' + this.state.age}
          />

          <Text style={styles.header}> Phone </Text>
          <CustomTextInput
            onChangeText={(e) => this.setState({...this.state, phone_no: e})}
            length={5}
            image={circle}
            keyboardType="numeric"
            placeholder="Phone_no"
            value={'' + this.state.phone_no}
          />

          <Text style={styles.header}> Skill </Text>
          <CustomTextInput
            onChangeText={(e) => this.setState({...this.state, skill: e})}
            length={5}
            image={circle}
            keyboardType="numeric"
            placeholder="Phone_no"
            value={'' + this.state.skill}
          />

          <Text style={styles.header}> Location </Text>
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
