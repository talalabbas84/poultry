import React from 'react';
import {View, Text, Image} from 'react-native';
import AppStyles from '../../styles';
import Button from '../../components/button';
import TextInput from '../../components/textInput';
import colors from '../../constants/colors';
import {phone, logo, user} from '../../constants/images';
import Axios from 'axios';

class Login extends React.Component {
  state = {
    name: '',
    number: '',
  };

  validateLogin = async (name, number) => {
    // console logging the name and number for testing
    console.log(this.state);

    // make api call to login

    //  perform navigation if all goes well
    this.props.navigation.navigate('DrawerStack');
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
