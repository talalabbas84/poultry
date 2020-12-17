import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {Card} from 'native-base';
import colors from '../constants/colors';

const HEIGHT = Dimensions.get('window').height;

const textInput = (props) => {
  return (
    <Card style={styles.text}>
      <Image source={props.image} style={styles.image} />
      <TextInput
        style={styles.input}
        maxLength={props.length}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onChangeText={props.onChangeText}
      />
    </Card>
  );
};

export default textInput;

const styles = StyleSheet.create({
  text: {
    width: '90%',
    height: HEIGHT / 14,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 4,
    alignSelf: 'center',
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: colors.lighGrey,
    borderColor: colors.lighGrey,
  },
  image: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginHorizontal: 15,
    right: 0,
    position: 'absolute',
  },
  input: {
    right: 0,
    position: 'absolute',
    marginRight: 50,
  },
});
