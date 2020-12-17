import React from 'react';
import {View, Text, Image} from 'react-native';
import AppStyles from '../../styles';
import Button from '../../components/button';
import TextInput from '../../components/textInput';
import colors from '../../constants/colors';
import {phone, logo, user} from '../../constants/images';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
  state = {
    name: '',
    number: '',
  };
  // saveData = async (value) => {
  //   alert('coming here');
  //   try {
  //     await AsyncStorage.setItem('token', value);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  validateLogin = async (name, number) => {
    if (name !== '' && number !== '') {
      // const body = JSON.stringify({name, number});
      const formData = new FormData();
      formData.append('number', number);
      formData.append('name', name);
      // alert('dsads');
      axios({
        method: 'post',
        url: 'https://www.pakpoultryhub.com/api/user_signin.php',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'},
      })
        .then(async (response) => {
          //handle success
          // alert('success');
          console.log(response.data);
          await AsyncStorage.setItem('token', response.data.token);
          this.props.navigation.navigate('DrawerStack');
        })
        .catch(function (response) {
          //handle error
          alert('error');
          console.log(response);
        });
    }
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.backColor}}>
        <Image style={AppStyles.imageLogo} source={logo} />
        <View style={AppStyles.line} />
        <Text style={AppStyles.boldText}>Login</Text>

        <TextInput
          length={11}
          image={user}
          placeholder="Full Name"
          onChangeText={(e) => this.setState({...this.state, name: e})}
        />

        <TextInput
          length={11}
          keyboardType={'numeric'}
          image={user}
          placeholder="Phone Number"
          onChangeText={(e) => this.setState({...this.state, number: e})}
        />

        <Button
          onPress={() => this.validateLogin(this.state.name, this.state.number)}
          red
          title="COMPLETE LOGIN"
        />
      </View>
    );
  }
}
export default Login;
