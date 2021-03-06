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
import axios from 'axios';
import {Card} from 'native-base';
import AppStyles from '../../../appStyles/styles';
import AsyncStorage from '@react-native-community/async-storage';

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

    user_id: null,
    category_id: 3, // TODO: check id
    sub_category_id: 1,
    city_id: null,
    weight: null,
    type: null,
    rate: null,
    lessOnCash: '',
    address: '',
    number: '',
    location: '',
    date: new Date().toString().slice(4, 15),
    name: '',
    images: '',
    view: '',
    city_name: '',
    city: [],
    grade: '',
  };

  constructor(props) {
    super(props);

    this.getUserid();
  }
  getUserid = async function name(params) {
    this.setState({
      user_id: await AsyncStorage.getItem('user_id'),
    });
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
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

  createPost = () => {
    console.log(this.state);
    const body = JSON.stringify({
      user_id: this.state.user_id,
      category_id: this.state.category_id,
      sub_category_id: this.state.sub_category_id,
      city_id: this.state.city_id ? this.state.city_id : this.state.city[0].id,
      weight: this.state.weight,
      type: this.state.type,
      rate_per_pati: this.state.rate,
      enter_grade: this.state.grade,
      address: this.state.address,
      phone_no: this.state.number,

      date: this.state.date,
    });
    // alert('dsads');
    axios({
      method: 'post',
      url: 'https://www.pakpoultryhub.com/api/egg_post.php',
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        console.log(response.data);
        this.setState({
          ...this.state,
          weight: null,
          type: null,
          rate: null,
          grade: '',
          address: '',
          phone_no: '',
          location: '',
        });
        alert('Post added Successfully');
        this.props.navigation.navigate('showAddForEggsGolderMisri');
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });

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
    return this.state.city && this.state.city.length > 0 ? (
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
                onChangeText={(e) => this.setState({...this.state, rate: e})}
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
                selectedValue={this.state.city_id}
                style={AppStyles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({...this.state, city_id: itemValue})
                }>
                {this.state.city.map((city) => (
                  <Picker.Item label={city.city_name} value={city.id} />
                ))}
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
    ) : null;
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
