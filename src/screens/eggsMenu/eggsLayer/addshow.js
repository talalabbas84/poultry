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
import Header from '../../../components/header';
import colors from '../../../constants/colors';
import {
  eggs,
  chick,
  chicken,
  tag,
  like,
  unlike,
} from '../../../constants/images';
import AppStyles from '../../../styles';
import Button from '../../../components/button';
import {Rating, AirbnbRating} from 'react-native-ratings';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
class Home extends React.Component {
  state = {
    from: '',
    route: '',
    eggData: [],
    city: [],
    token: '',
  };

  componentDidMount() {
    if (this.props.route.params) {
      const from = this.props.route.params.from;
      if (from === 'BROILER' || from === 'GOLDEN MISRI') {
        this.setState({
          route: 'CreatePost',
        });
      } else {
        this.setState({
          route: 'AvailableAdd',
        });
      }
    }
    this.props.navigation.addListener('focus', () => {
      this.getData();
      this.readData();
    });

    this.getData();
  }

  getCityName = (city_id) => {
    // alert('hi');
    let city_name = '';
    console.log(this.state.city, 'cityyyyyy');
    this.state.city.map((city) => {
      if (city.id == city_id) {
        // alert('ds');
        city_name = city.city_name;
      }
    });
    // alert(city_name);
    return city_name;
  };
  getData = async () => {
    // alert('ds');
    try {
      const res = await axios.get(
        `https://www.pakpoultryhub.com/api/egg_fetch.php`,
      );
      const res2 = await axios.get(
        `https://www.pakpoultryhub.com/api/city.php`,
      );
      console.log(res2.data);
      this.setState({...this.setState, eggData: res.data});
      this.setState({...this.setState, city: res2.data});
      // alert('success');
    } catch (err) {
      // alert(err.message);
    }
  };

  gettingDataAgainstSubCategory = () => {
    // alert('ds');
    let data = [];
    this.state.eggData.map((egg) => {
      if (egg.sub_cateogory_id == 1) {
        // alert('ds');
        // return egg;
        data.push(egg);
      }
      //   return egg;
    });
    return data;
  };
  readData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      alert(token);
      if (token) {
        this.setState({
          token: token,
        });
      } else {
        this.setState({
          token: '',
        });
      }

      return token;
    } catch (e) {}
  };

  state = {
    data: [
      {title: 'AD # 1', image: chicken, route: 'Rates', like: false},
      {title: 'AD # 2', image: eggs, like: false},
      {title: 'AD # 2', image: tag, like: false},
      {title: 'AD # 3', image: chick, like: false},
    ],
  };

  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  changeLikeIcon = (index) => {
    //alert(index)
    let {data} = this.state;
    let targetPost = data[index];

    // Flip the 'liked' property of the targetPost
    targetPost.like = !targetPost.like;

    // Then update targetPost in 'posts'
    // You probably don't need the following line.
    // posts[index] = targetPost;

    // Then reset the 'state.posts' property
    this.setState({data});
  };
  renderItem = ({item, index}) => {
    console.log(item, 'teimmmmmm');
    // alert('dssd');
    return (
      <Card style={styles.card}>
        <View
          // onPress={()=> this.props.navigation.navigate(item.route)}
          style={styles.touchcard}>
          <View style={styles.likeView}>
            <Text style={styles.text}>{item.title}</Text>
            <TouchableOpacity onPress={() => this.changeLikeIcon(index)}>
              <Image style={styles.image} source={item.like ? like : unlike} />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <View>
              <View style={styles.row}>
                <Text>گریڈ</Text>
                <Text style={styles.blackText}>{item.enter_grade}</Text>
              </View>

              <View style={styles.row}>
                <Text>شہر</Text>
                <Text style={styles.blackText}>
                  {this.getCityName(item.city_id)}
                </Text>
              </View>
            </View>

            <View>
              <View style={styles.row}>
                <Text>rate</Text>
                <Text style={styles.blackText}>{item.rate_per_pati}</Text>
              </View>

              <View style={styles.row}>
                <Text>وزن</Text>
                <Text style={styles.blackText}>{item.weight}</Text>
              </View>
            </View>
          </View>

          {/* <Rating
                        imageSize={20}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 1 }}
                        /> */}

          {/* 
                    <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('ViewImages')}
                    >
                             <Text style={[styles.text,{alignSelf:'center',fontSize:15,marginVertical:10}]}>VIEW IMAGES</Text>

                    </TouchableOpacity> */}
        </View>
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.whiteText}>LIKE </Text>
          <View style={styles.line} />

          <Text style={styles.whiteText}>CALL NOW</Text>
        </TouchableOpacity>
      </Card>
    );
  };

  render() {
    const {from, route} = this.state;
    return this.state.eggData &&
      this.state.eggData.length > 0 &&
      this.state.city &&
      this.state.city.length > 0 ? (
      <View style={{flex: 1, backgroundColor: colors.backColor}}>
        <Header back navigation={this.props.navigation} />

        <Text style={AppStyles.boldText}>انڈے</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.FlatListStyles}
          data={this.gettingDataAgainstSubCategory()}
          renderItem={this.renderItem}
          keyExtractor={(key, index) => index.toString()}
        />
        {this.state.token !== '' && (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('CreateAddForEggLayer', {
                from,
              })
            }
            style={styles.btn}>
            <Text style={styles.title}>CREATE NEW POST</Text>
          </TouchableOpacity>
        )}
      </View>
    ) : null;
  }
}
export default Home;

const styles = StyleSheet.create({
  card: {
    width: WIDTH / 1.1,
    height: HEIGHT / 3,
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
    backgroundColor: colors.red,
    width: '100%',
    height: 60,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: 'row',
  },
  whiteText: {
    color: 'white',
  },
  line: {
    height: 20,
    backgroundColor: 'white',
    width: 2,
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
  btn: {
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: colors.red,
    height: HEIGHT / 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
});
