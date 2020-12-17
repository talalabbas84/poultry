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
    weight: -1,
    rate: -1,
    lessOnCash: -1,
    address: '',
    number: -1,
    location: '',
  };

  constructor(props) {
    super(props);
    this.setState({
      weight: props.weight,
      rate: props.rate,
      lessOnCash: props.lessOnCash,
      address: props.address,
      number: props.number,
      location: props.location,
    });
  }

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

          <CustomTextInput length={5} image={circle} placeholder="Weight" />

          <Text style={styles.header}> Type Rate </Text>
          <CustomTextInput length={5} image={circle} placeholder="Type Rate" />
          <Text style={styles.header}> Less on cash </Text>

          <CustomTextInput
            length={5}
            image={circle}
            placeholder="Less on cash"
          />

          <Text style={styles.header}> Address </Text>

          <CustomTextInput length={5} image={circle} placeholder="Address" />

          <Text style={styles.header}> Phone Number </Text>

          <CustomTextInput length={5} image={circle} placeholder="Number" />

          <Text style={styles.header}> Location </Text>

          <CustomTextInput length={5} image={circle} placeholder="Location" />

          <View style={{marginBottom: 50, marginTop: 20}}>
            <Button red style={styles.button} title="ترمیم" />
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
