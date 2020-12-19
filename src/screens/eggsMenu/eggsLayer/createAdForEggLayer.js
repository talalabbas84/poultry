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
import Header from '../../../components/header';
import CustomTextInput from '../../../components/textInput';
import colors from '../../../constants/colors';
import Button from '../../../components/button';
import {
  phone,
  circle,
  city,
  downArrow,
  weight,
  marker,
  camera,
} from '../../../constants/images';
import {Card} from 'native-base';
import AppStyles from '../../../appStyles/styles';

class Create extends React.Component {
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

    id: '',
    user_id: '',
    category_id: '',
    city_id: '',
    weight: '',
    type: '',
    rate_per_pati: '',
    enter_grade: '',
    address: '',
    number: '',
    location: '',
    date: new Date().toString().slice(4, 15),
    nasal: '',
    images: '',
    grade: '',
  };

  constructor(props) {
    super(props);
    const user_id = 1;
    const category_id = 3;
    const city_id = 1;

    this.setState({
      ...this.state,
      user_id: user_id,
      category_id: category_id,
      city_id: city_id,
    });
  }

  createPost = () => {
    console.log(this.state);

    // generate an id? since it is needed for every post ig
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
        <ScrollView>
          <Header back navigation={this.props.navigation} title="CREATE POST" />

          <View>
            <Text style={styles.text}>انڈے کا وزن درج کرے</Text>
            <CustomTextInput
              onChangeText={(e) => this.setState({...this.state, weight: e})}
              image={weight}
              keyboardType="numeric"
              placeholder="Type Here"
            />
          </View>

          {/* {showType && (
            <View>
              <Text style={styles.text}>انڈے کی طرز درج کریں</Text>
              <Card style={AppStyles.pickerBack}>
                <Picker
                  selectedValue={selectedNasal}
                  style={AppStyles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({...this.state, type: itemValue})
                  }>
                  <Picker.Item label="فریش" value=" فریش" />
                  <Picker.Item label="فریش" value="فریش" />
                </Picker>
              </Card>
            </View>
          )} */}

          {showRate && (
            <View>
              <Text style={styles.text}>انڈے کا ریٹ فی پیٹی درج کریں</Text>
              <CustomTextInput
                keyboardType="numeric"
                image={circle}
                onChangeText={(e) =>
                  this.setState({...this.state, rate_per_pati: e})
                }
                placeholder="Enter Rate"
              />
            </View>
          )}

          <View>
            <Text style={styles.text}>
              ریٹ شہر مارکیٹ کے مطابق خود درج کریں
            </Text>
            <Card style={AppStyles.pickerBack}>
              <Picker
                selectedValue={selectedCity}
                style={AppStyles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({...this.state, location: itemValue})
                }>
                <Picker.Item label="کراچی" value="کراچی" />
                <Picker.Item label="لاہور" value="لاہور" />
                <Picker.Item label="اسلام آباد" value="اسلام آباد" />
                <Picker.Item label="سیالکوٹ" value="سیالکوٹ" />
              </Picker>
            </Card>
          </View>

          {showType && (
            <View>
              <Text style={styles.text}>چکس گریڈ درج کریں</Text>
              <Card style={AppStyles.pickerBack}>
                <Picker
                  selectedValue={this.state.nasal}
                  style={AppStyles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({...this.state, grade: itemValue})
                  }>
                  <Picker.Item label="سٹارٹر" value=" سٹارٹر" />
                  <Picker.Item label="A گریڈ" value="A     گریڈ" />
                  <Picker.Item label=" A++ گریڈ" value="A++ گریڈ" />
                </Picker>
              </Card>
            </View>
          )}

          {/* {showLess &&  <View>
                    <Text style={styles.text}> درج کریں</Text>
                    <CustomTextInput image={downArrow} placeholder="Enter less(e.g Rs.5)"/>

                </View>} */}

          {showAddress && (
            <View>
              <Text style={styles.text}>فارم کا پتہ درج کریں</Text>
              <CustomTextInput
                image={marker}
                placeholder="Enter your local address"
                onChangeText={(e) => this.setState({...this.state, address: e})}
              />
            </View>
          )}

          {showPhone && (
            <View>
              <Text style={styles.text}>فون نمبر درج کریں</Text>
              <CustomTextInput
                keyboardType="numeric"
                image={phone}
                placeholder="eg.03xxxxxxx"
                onChangeText={(e) => this.setState({...this.state, number: e})}
              />
            </View>
          )}

          {/* <Text style={styles.text}>Attach images</Text>

                <TouchableOpacity style={styles.camera}>
                        <Image source={camera}/>
                </TouchableOpacity>

                <Text style={[styles.text,{alignSelf:'center',fontSize:12}]}>your post will be deleted automatically after 24 hours</Text> */}

          <Button red title="CREATE NEW POST" onPress={this.createPost} />
        </ScrollView>
      </View>
    );
  }
}

export default Create;

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
