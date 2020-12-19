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
    id: this.props.route.params.id,
    weight: this.props.route.params.weight,
    rate: this.props.route.params.rate,
    less_on_cash: this.props.route.params.less_on_cash,
    address: this.props.route.params.address,
    number: this.props.route.params.number,
    location: this.props.route.params.location,
    type: this.props.route.params.type,
    date: new Date().toString().slice(4, 15),
  };

  editPost = async () => {
    // edit the post here

    console.log(this.state);
    const body = JSON.stringify({
      id: this.state.id,
      user_id: await AsyncStorage.getItem('user_id'),
      category_id: 0,
      weight: this.state.weight,
      type: this.state.type,
      rate: this.state.rate,
      less_on_cash: this.state.lessOnCash,
      address: this.state.address,
      phone_no: this.state.number,
      location: this.state.location,
      like: 'asdad',
      view: 'asdad',
      date: this.state.date,
      images: 'm2.jpg',
    });
    // alert('dsads');
    axios({
      method: 'post',
      url: 'https://www.pakpoultryhub.com/api/boiler_edit_submit.php',
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
        // console.log(response.data);
        alert('Post edit Successfully');
        // await AsyncStorage.setItem('token', response.data.token);
        this.props.navigation.navigate('myAds');
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });
  };

  render() {
    return (
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

          <Text style={styles.header}> Weight </Text>

          <CustomTextInput
            onChangeText={(e) => this.setState({...this.state, weight: e})}
            length={5}
            image={circle}
            placeholder="Weight"
            keyboardType="numeric"
            value={'' + this.state.weight}
          />

          <Text style={styles.header}> Type </Text>
          <CustomTextInput
            onChangeText={(e) => this.setState({...this.state, type: e})}
            length={5}
            image={circle}
            placeholder="Type"
            value={'' + this.state.type}
          />

          <Text style={styles.header}> Rate </Text>
          <CustomTextInput
            onChangeText={(e) => this.setState({...this.state, rate: e})}
            length={5}
            image={circle}
            keyboardType="numeric"
            placeholder="Rate"
            value={'' + this.state.rate}
          />

          <Text style={styles.header}> Less on cash </Text>

          <CustomTextInput
            onChangeText={(e) =>
              this.setState({...this.state, less_on_cash: e})
            }
            length={11}
            image={circle}
            keyboardType="numeric"
            placeholder="less"
            value={this.state.less_on_cash + ''}
          />

          <Text style={styles.header}> Address </Text>

          <CustomTextInput
            length={20}
            image={circle}
            onChangeText={(e) => this.setState({...this.state, address: e})}
            placeholder="Address"
            value={this.state.address}
          />

          {/* 
          <Text style={styles.header}> Phone Number </Text>
          <CustomTextInput
            length={5}
            onChangeText={(e) => this.setState({...this.state, number: e})}
            image={circle}
            keyboardType="numeric"
            placeholder="Number"
            value={this.state.number}
          /> */}

          <Text style={styles.header}> Location </Text>

          <CustomTextInput
            value={this.state.location}
            onChangeText={(e) => this.setState({...this.state, location: e})}
            length={20}
            image={circle}
            placeholder="Location"
          />

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
    );
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
