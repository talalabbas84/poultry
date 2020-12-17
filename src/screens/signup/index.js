import React from 'react';
import {View, Text, Image} from 'react-native';
import AppStyles from '../../styles';
import Button from '../../components/button';
import TextInput from '../../components/textInput';
import colors from '../../constants/colors';
import {phone, logo, user} from '../../constants/images';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component {
  state = {
    name: '',
  };

  num = this.props.route.params.number;

  onSignUp = () => {
    console.log(this.num);
    console.log(this.state.name);
    if (this.num !== '' && this.state.name !== '') {
      // const body = JSON.stringify({name, number});
      const formData = new FormData();
      formData.append('number', this.num);
      formData.append('name', this.state.name);
      // alert('dsads');
      axios({
        method: 'post',
        url: 'https://www.pakpoultryhub.com/api/user_signup.php',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'},
      })
        .then(async (response) => {
          // alert('suxxe');
          //handle success
          // alert('success');
          console.log(response.data);
          alert('User registered successfully.Please log into application');
          // await AsyncStorage.setItem('token', response.data.token);
          this.props.navigation.navigate('Login');
        })
        .catch(function (response) {
          //handle error
          alert('User already exitsts');
          console.log(response);
        });
    } else {
      alert('Please type name and phone number');
    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.backColor}}>
        <Image style={AppStyles.imageLogo} source={logo} />
        <View style={AppStyles.line} />
        <Text style={AppStyles.boldText}>Welcome</Text>

        <TextInput
          onChangeText={(e) => this.setState({...this.state, name: e})}
          length={11}
          image={user}
          placeholder="Full Name"
        />
        <Button onPress={() => this.onSignUp()} red title="COMPLETE SIGNUP" />
      </View>
    );
  }
}
export default Home;
