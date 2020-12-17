import React from 'react';
import {View, Text, Image} from 'react-native';
import AppStyles from '../../styles';
import Button from '../../components/button';
import TextInput from '../../components/textInput';
import colors from '../../constants/colors';
import {phone, logo, user} from '../../constants/images';

class Home extends React.Component {
  state = {
    name: '',
  };

  num = this.props.route.params.number;

  onSignUp = () => {
    console.log(this.num);
    console.log(this.state.name);
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
