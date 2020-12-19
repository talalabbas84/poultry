import {Card} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header';
import colors from '../../constants/colors';
import {eggs, chick, chicken, tag, like, unlike} from '../../constants/images';
import AppStyles from '../../styles';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
class Home extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: 'AD # 1',
        image: chicken,
        route: 'Rates',
        like: false,
        count: '10 likes',
        clickedCount: 'post click :#10',
        weight: 1134,
        type: 'Lorem',
        rate: 1111,
        less_on_cash: 2122,
        location: 'Karachi',
        address: 'Clifton Block 7 ',
      },
      {
        id: 2,
        title: 'AD # 2',
        image: eggs,
        like: false,
        count: '20 likes',
        clickedCount: 'post click :#12',

        weight: 123123,
        type: 'Lorem',
        rate: 121,
        less_on_cash: 222,
        location: 'Lahore',
        address: 'Sector 1/2 ',
      },
    ],
    goldenMisriData: [],
    city: [],
    bool: true,
  };
  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      // alert('dss');
      this.getData();
      // alert('fddf');
    });
    // alert('ds');
    // this.focusListener = this.props.navigation.addListener('didFocus', () => {
    //   alert('dssd');
    //   this.getData();
    // });
    this.getData();
  }
  // componentWillUnmount() {
  //   this.focusListener.remove();
  // }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    if (prevState.bool !== this.state.bool) {
      this.getData();
    }
  }

  getData = async () => {
    // alert('ds');
    const link = `https://www.pakpoultryhub.com/api/goldenmisri_category_by_user.php?user_id=${await AsyncStorage.getItem(
      'user_id',
    )}`;
    console.log(link);
    try {
      const res = await axios.get(link);
      console.log(res.data, 'ressssssssssssss');
      const res2 = await axios.get(
        `https://www.pakpoultryhub.com/api/city.php`,
      );
      // console.log(res.data);
      this.setState({...this.setState, goldenMisriData: res.data});
      this.setState({...this.setState, city: res2.data});
      // this.setState({})
      // alert('success');
    } catch (err) {
      // alert(err.message);
    }
  };

  getCityName = (city_id) => {
    // alert('hi');
    let city_name = '';
    this.state.city.map((city) => {
      if (city.id == city_id) {
        city_name = city.city_name;
      }
    });
    return city_name;
  };

  deleteHandler = async (id) => {
    const body = JSON.stringify({
      post_id: id,
      user_id: await AsyncStorage.getItem('user_id'),
    });
    // console.log(body);
    this.setState({...this.setState, bool: true});
    // alert('dsads');
    axios({
      method: 'post',
      url: 'https://www.pakpoultryhub.com/api/goldenmisri_delete.php',
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        // console.log(response.data);
        // alert('suxxe');
        //handle success
        // alert('success');
        // console.log(response.data);
        alert('Post deleted Successfully');
        // await AsyncStorage.setItem('token', response.data.token);
        // this.props.navigation.navigate('myAds');
        this.setState({...this.setState, bool: false});
      })
      .catch(function (response) {
        //handle error
        // alert('User already exists');
        console.log(response);
      });
  };

  navigateToEdit = (
    id,
    weight,
    rate,
    type,
    less_on_cash,
    location,
    address,
    city_id,
  ) => {
    this.props.navigation.navigate('EditAdGoldenMisri', {
      id,
      weight,
      rate,
      type,
      less_on_cash,
      location,
      address,
      city_id,
    });
  };

  renderItem = ({item, index}) => {
    console.log(item, 'itemmmmmmmm');
    return (
      <Card style={styles.card}>
        <View
          // onPress={()=> this.props.navigation.navigate(item.route)}
          style={styles.touchcard}>
          <View style={styles.likeView}>
            <View>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={[styles.text, {marginVertical: 0}]}>
                {item.clickedCount}
              </Text>
            </View>

            <TouchableOpacity
              style={{alignItems: 'center'}}
              // onPress ={()=>this.changeLikeIcon(index)}
            >
              <Image style={styles.image} source={like} />
              <Text style={[styles.text, {marginTop: -10}]}>{item.count}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <View>
              <View style={styles.row}>
                <Text>Weight</Text>
                <Text style={styles.blackText}>{item.weight}</Text>
              </View>

              <View style={styles.row}>
                <Text>City</Text>
                <Text style={styles.blackText}>
                  {this.getCityName(item.city_id)}
                </Text>
              </View>

              <View style={styles.row}>
                <Text>rate </Text>
                <Text style={styles.blackText}>{item.rate}</Text>
              </View>
              <View style={styles.row}>
                <Text>less on cash</Text>
                <Text style={styles.blackText}>{item.less_on_cash}</Text>
              </View>

              <View style={styles.row}>
                <Text>Address</Text>
                <Text style={styles.blackText}>{item.address}</Text>
              </View>

              <View style={styles.row}>
                <Text>Location</Text>
                <Text style={styles.blackText}>{item.location}</Text>
              </View>
            </View>

            <View>
              <View style={styles.row}>
                <Text>Weight</Text>
                <Text style={styles.blackText}>{item.weight}</Text>
              </View>

              <View style={styles.row}>
                <Text>Type</Text>
                <Text style={styles.blackText}>{item.type}</Text>
              </View>

              <View style={styles.row}>
                <Text>rate </Text>
                <Text style={styles.blackText}>{item.rate}</Text>
              </View>
              <View style={styles.row}>
                <Text>less on cash</Text>
                <Text style={styles.blackText}>{item.less_on_cash}</Text>
              </View>

              <View style={styles.row}>
                <Text>Address</Text>
                <Text style={styles.blackText}>{item.address}</Text>
              </View>

              <View style={styles.row}>
                <Text>City</Text>
                <Text style={styles.blackText}>
                  {this.getCityName(item.city_id)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <TouchableOpacity
            onPress={() => {
              this.navigateToEdit(
                item.id,
                item.weight,
                item.rate,
                item.type,
                item.less_on_cash,
                item.location,
                item.address,
                item.city_id,
              );
            }}>
            <Text style={styles.redtext}>EDIT </Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity onPress={() => this.deleteHandler(item.id)}>
            <Text style={styles.redtext}>DELETE</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  };

  render() {
    // alert('dsds');
    console.log(this.state.goldenMisriData, 'dsdsdsds');
    return (
      <View style={{flex: 1, backgroundColor: colors.backColor}}>
        <Header title="میرے اشتھارات" navigation={this.props.navigation} />

        <Text style={styles.title}>Golden Mishri Ads </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.FlatListStyles}
          data={this.state.goldenMisriData}
          renderItem={this.renderItem}
          keyExtractor={(key, index) => index.toString()}
        />
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  card: {
    width: WIDTH / 1.1,
    height: HEIGHT / 2.2,
    borderRadius: 20,
    marginVertical: 5,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    alignSelf: 'center',
  },
  FlatListStyles: {
    marginHorizontal: 10,
  },
  text: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: 10,
  },
  redtext: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 15,
  },
  line: {
    height: 20,
    backgroundColor: 'grey',
    width: 2,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 45,
  },
  touchcard: {
    marginVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  bottomBtn: {
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    height: 60,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    alignSelf: 'center',
  },
  whiteText: {
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  blackText: {
    marginLeft: 10,
    color: colors.grey,
  },
  likeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  immage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 17,

    textAlign: 'center',
    color: 'black',
    padding: 10,
  },
});
