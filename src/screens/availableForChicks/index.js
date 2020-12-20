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
import {
  eggs,
  chick,
  chicken,
  tag,
  like,
  unlike,
  hen1,
} from '../../constants/images';
import AppStyles from '../../styles';
import Button from '../../components/button';
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
            <View style={{flex: 3, marginRight: 20, alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>ہیچری کا نام</Text>

              <Rating
                imageSize={20}
                onFinishRating={this.ratingCompleted}
                style={{paddingVertical: 1, marginVertical: 2}}
              />
            </View>
            <View
              style={[
                styles.line,
                {backgroundColor: 'black', marginHorizontal: 10, height: 40},
              ]}
            />
            <TouchableOpacity
              style={{flex: 1}}
              // onPress ={()=>this.changeLikeIcon(index)}
            >
              <Image style={styles.image} source={hen1} />
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <View>
              <View style={styles.row}>
                <Text>گریڈ</Text>
                <Text style={styles.blackText}>گریڈ</Text>
              </View>

              <View style={styles.row}>
                <Text>شہر</Text>
                <Text style={styles.blackText}>شہر</Text>
              </View>

              <View style={styles.row}>
                <Text>ریٹ </Text>
                <Text style={styles.blackText}>ریٹ</Text>
              </View>
            </View>

            <View>
              <View style={styles.row}>
                <Text>نسل</Text>
                <Text style={styles.blackText}>نسل</Text>
              </View>

              <View style={styles.row}>
                <Text>وزن</Text>
                <Text style={styles.blackText}>وزن</Text>
              </View>

              <View style={styles.row}>
                <Text>تاریخ </Text>
                <Text style={styles.blackText}>تاریخ</Text>
              </View>
              <View style={styles.row}>
                <Text>فارم پتہ</Text>
                <Text style={styles.blackText}>فارم پتہ</Text>
              </View>
            </View>
          </View>

          {/* <Rating
                        imageSize={20}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 1 }}
                        /> */}

          {/* <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('ViewImages')}
                    >
                             <Text style={[styles.text,{alignSelf:'center',fontSize:15,marginVertical:10}]}>VIEW IMAGES</Text>

                    </TouchableOpacity> */}
        </View>
        <TouchableOpacity style={styles.bottomBtn}>
          <Text style={styles.whiteText}>CALL NOW</Text>

          {/* <Text style={styles.whiteText}>LIKE    </Text> */}
          <View style={styles.line} />
          <Image source={like} style={{width: 30, height: 30}} />
        </TouchableOpacity>
      </Card>
    );
  };

  render() {
    const {from, route} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: colors.backColor}}>
        <Header back navigation={this.props.navigation} />

        <Text style={AppStyles.boldText}>دستیاب</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.FlatListStyles}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(key, index) => index.toString()}
        />

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('AvailableAdd', {
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
    height: HEIGHT / 2.4,
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
