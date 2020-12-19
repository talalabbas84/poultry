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
import AppStyles from '../../../appStyles/styles';
import {Card} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

class Create extends React.Component {
  userId;
  state = {
    from: '',

    showWeight: true,
    showType: true,
    showRate: true,
    showLess: true,
    showAddress: true,
    showCity: true,
    showPhone: true,
    showGrade: false,

    user_id: null,
    category_id: 1, // TODO: check id
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
  };

  // user_id, category_id, city_id, weight, type, rate, less_on_cash, address,
  //  phone_no, location, like, view, images, date

  constructor(props) {
    super(props);
    const user_id = 1;
    const category_id = 0;
    const city_id = 1;

    // this.setState({...this.state, user_id, category_id, city_id});
    // AsyncStorage.getItem;
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
    // alert('ds');
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
    const body = JSON.stringify({
      user_id: this.state.user_id,
      category_id: this.state.category_id,
      city_id: this.state.city_id ? this.state.city_id : this.state.city[0].id,
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
      url: 'https://www.pakpoultryhub.com/api/boiler_post.php',
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        this.setState({
          ...this.state,
          weight: null,
          type: null,
          rate: null,
          less_on_cash: '',
          address: '',
          phone_no: '',
          location: '',
        });
        alert('Post added Successfully');
        this.props.navigation.navigate('Available');
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });

    // all varaiables are here, just trim the date
  };

  render() {
    // alert('dss');
    // alert(this.state.user_id);
    // alert(this.state.city_name);
    // console.log(this.state.city_name, 'cityyyyyyyyyyy nameeeeeeeeee');
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
      selectedGender,
      selectedCity,
    } = this.state;
    return this.state.city && this.state.city.length > 0 ? (
      <View>
        <ScrollView>
          <Header back navigation={this.props.navigation} title="Broiler Add" />
          {showRate && (
            <View>
              <Text style={styles.text}>ہیچری کا نام درج کریں</Text>
              <CustomTextInput
                onChangeText={(e) => this.setState({...this.state, name: e})}
                image={circle}
                placeholder="نام"
              />
            </View>
          )}

          {showLess && (
            <View>
              <Text style={styles.text}>فارم کا پتہ درج کریں</Text>
              <CustomTextInput
                onChangeText={(e) => this.setState({...this.state, address: e})}
                image={downArrow}
                placeholder="پتہ"
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
                {/* <Picker.Item label="لاہور" value="لاہور" />
                <Picker.Item label="اسلام آباد" value="اسلام آباد" />
                <Picker.Item label="سیالکوٹ" value="سیالکوٹ" /> */}
              </Picker>
            </Card>
          </View>

          {showRate && (
            <View>
              <Text style={styles.text}>وزن در کرے</Text>
              <CustomTextInput
                length={4}
                keyboardType="numeric"
                image={circle}
                placeholder="گرام"
                onChangeText={(e) => this.setState({...this.state, weight: e})}
              />
            </View>
          )}

          <View>
            <Text style={styles.text}>
              ریٹ مارکیٹ کے مطابق /ریٹ خود درج کریں
            </Text>
            <CustomTextInput
              onChangeText={(e) => this.setState({...this.state, rate: e})}
              image={circle}
              placeholder="درج کریں"
            />
            {showLess && (
              <View>
                <Text style={styles.text}>نقد پر کم</Text>
                <CustomTextInput
                  onChangeText={(e) =>
                    this.setState({...this.state, lessOnCash: e})
                  }
                  image={circle}
                  placeholder="Enter less(e.g Rs.5)"
                />
              </View>
            )}
          </View>
          {showPhone && (
            <View>
              <Text style={styles.text}>فون نمبر درج کریں</Text>
              <CustomTextInput
                keyboardType="numeric"
                image={phone}
                onChangeText={(e) => this.setState({...this.state, number: e})}
                placeholder="eg.03xxxxxxx"
              />
            </View>
          )}

          {/* 
            <View>
                <Text style={styles.text}>تعداد درج کریں</Text>
                <CustomTextInput
                length={5}
                image={marker} placeholder="درج کریں"/>

            </View> 
          
            <View>
                <Text style={styles.text}>عمر درج کریں</Text>
                <CustomTextInput
                image={marker} placeholder="دن درج کریں"/>

            </View> 
            <View>
                <Text style={styles.text}>فارم کا پتہ درج کریں</Text>
                <CustomTextInput
                image={marker} placeholder="پتہ درج کریں"/>

            </View> 

            <View>
                <Text style={styles.text}>فون نمبر درج کریں</Text>
                <CustomTextInput
                image={marker} placeholder=" درج کریں"/>

            </View> 

            <View>
                <Text style={styles.text}>تفصیل درج کریں</Text>
                <CustomTextInput
                image={marker} placeholder=" درج کریں"/>

            </View> 

            */}

          {/*         
        {showCity &&        <View>
                    <Text style={styles.text}>Enter your city</Text>
                    <CustomTextInput image={city} placeholder="Enter your city"/>


                </View>}
                
         {showPhone &&       <View>
                    <Text style={styles.text}>فون نمبر درج کریں</Text>
                    <CustomTextInput
                    keyboardType='numeric'
                    image={phone} placeholder="eg.03xxxxxxx"/>

                </View>} */}

          {/* <Text style={styles.text}>تصویر لگائیں</Text>

                    <TouchableOpacity style={styles.camera}>
                            <Image source={camera}/>
                    </TouchableOpacity> */}

          <Text style={[styles.text, {alignSelf: 'center', fontSize: 12}]}>
            your post will be deleted automatically after 24 hours
          </Text>

          <Button red title="پوسٹ" onPress={() => this.createPost()} />
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
