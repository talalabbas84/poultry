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
import {Card} from 'native-base';
import AppStyles from '../../appStyles/styles';
class EditAd extends React.Component {
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
    selectedNasal: '',
    selectedCity: '',
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
      selectedCity,
    } = this.state;
    return (
      <View>
        <Header
          back
          navigation={this.props.navigation}
          title="اشتھارات ترمیم"
        />

        {/* weight, type rate, less on cash , address, city  */}

        <CustomTextInput
          length={5}
          keyboardType="numeric"
          image={circle}
          placeholder=""
        />

        <Text>Hi i am edit screen </Text>
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
});
