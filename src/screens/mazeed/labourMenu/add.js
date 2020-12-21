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
  favourite,
  fav,
  cursor,
} from '../../../constants/images';
import AppStyles from '../../../styles';
import Button from '../../../components/button';
import {Rating, AirbnbRating} from 'react-native-ratings';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
class Home extends React.Component {
  state = {
    from: '',
    route: '',
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
  }

  state = {
    data: [
      {title: 'AD # 1', image: chicken, route: 'Rates', like: false},
      {title: 'AD # 2', image: eggs, like: false},
      {title: 'AD # 2', image: tag, like: false},
      {title: 'AD # 3', image: chick, like: false},
    ],
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.setState({
        ...this.state,
        subCategory: this.props.route.params.subCategory,
      });
      this.getData();
    });
    if (this.props.route.params) {
      const from = this.props.route.params.from;
      this.setState({header: from});
    }
    this.getData();
  }

  getData = async () => {
    // alert('ds');
    try {
      const res = await axios.get(
        `https://www.pakpoultryhub.com/api/odoc_fetch.php`,
      );
      const res2 = await axios.get(
        `https://www.pakpoultryhub.com/api/city.php`,
      );
      // console.log(res.data);

      console.log(res.data);

      console.log(this.state.subCategory);
      const odocData = res.data.filter(
        (item) => item.sub_cateogory_id === this.state.subCategory,
      );

      this.setState({...this.setState, odocData: odocData});
      this.setState({...this.setState, city: res2.data});
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
        // alert('ds');
        city_name = city.city_name;
      }
    });
    // alert(city_name);
    return city_name;
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
    return (
      <Card style={styles.card}>
        <View
          // onPress={()=> this.props.navigation.navigate(item.route)}
          style={styles.touchcard}>
          <View style={styles.likeView}>
            <Text style={styles.text}>{item.title}</Text>
            <TouchableOpacity onPress={() => this.changeLikeIcon(index)}>
              <Image
                style={styles.image}
                source={item.like ? fav : favourite}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <View>
              <View style={styles.row}>
                <Text>مہارت</Text>
                <Text style={styles.blackText}>مہارت</Text>
              </View>

              <View style={styles.row}>
                <Text>تجربہ </Text>
                <Text style={styles.blackText}>تجربہ</Text>
              </View>
            </View>

            <View>
              <View style={styles.row}>
                <Text>نام</Text>
                <Text style={styles.blackText}>نام</Text>
              </View>

              <View style={styles.row}>
                <Text>عمر</Text>
                <Text style={styles.blackText}>عمر</Text>
              </View>
            </View>
          </View>

          {/* <Rating
                        imageSize={20}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 1 }}
                        /> */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ViewImages')}>
            <Text
              style={[
                styles.text,
                {alignSelf: 'center', fontSize: 15, marginVertical: 10},
              ]}>
              View Full Add
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBtn}>
          <Text style={styles.whiteText}>CALL NOW</Text>
          <View style={styles.line} />
          {/* <Text style={styles.whiteText}>LIKE    </Text> */}
          <View>
            <Image
              style={[styles.image, {tintColor: 'white'}]}
              source={cursor}
            />
          </View>

          <View style={styles.line} />
          <Image style={styles.image} source={like} />
        </View>
      </Card>
    );
  };

  render() {
    const {from, route} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: colors.backColor}}>
        <Header back navigation={this.props.navigation} />

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.FlatListStyles}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(key, index) => index.toString()}
        />

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('createAddForLabour', {
              from,
            })
          }
          style={styles.btn}>
          <Text style={styles.title}>CREATE NEW POST</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  card: {
    width: WIDTH / 1.1,
    height: HEIGHT / 2.5,
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
    width: 20,
    height: 25,
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
    marginVertical: 10,
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
