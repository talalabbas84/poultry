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
  ScrollView,
} from 'react-native';
import Header from '../../components/header';
import colors from '../../constants/colors';
import {
  eggs,
  chick,
  chicken,
  tag,
  hen1,
  hen,
  chicks,
  eggs1,
  rate,
  shed,
} from '../../constants/images';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import Swiper from 'react-native-swiper';
import {ActivityIndicator} from 'react-native-paper';

class Home extends React.Component {
  state = {
    data: [
      {title1: 'BROILER', title: 'بروائلر', image: hen1, route: 'Available'},
      {
        title1: 'GOLDEN MISRI',
        title: 'گولڈن مسری',
        image: hen,
        route: 'GolderMisiShowAdd',
      },
      {
        title1: 'CHICKS',
        title: 'مرغی کا بچہ',
        image: chicks,
        route: 'ChickMenu',
      },
      {title1: 'EGGS', title: 'انڈہ', image: eggs1, route: 'EggsMenu'},
      {title1: 'SHED', title: 'مزید', image: shed, route: 'Mazeed'},
      {title1: 'RATE', title: 'شرح', image: rate, route: 'RateMenu'},
    ],
    date1: [],
    isloading: true,
  };
  renderItem = ({item, index}) => {
    if (index === 4) {
      return (
        <TouchableOpacity
          // onPress={()=> alert(item.title)}
          onPress={() =>
            this.props.navigation.navigate(item.route, {
              from: item.title,
            })
          }
          style={styles.mainView}>
          <Card style={[styles.card, {elevation: 10}]}>
            <View style={{flexDirection: 'row'}}>
              <Image source={hen} style={styles.card1} />
              <Image source={eggs1} style={styles.card1} />
            </View>
          </Card>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          // onPress={()=> alert(item.title)}
          onPress={() =>
            this.props.navigation.navigate(item.route, {
              from: item.title,
            })
          }
          style={styles.mainView}>
          <Card style={[styles.card, {elevation: 10}]}>
            <Image source={item.image} style={styles.card} />
          </Card>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      );
    }
  };

  componentDidMount() {
    this.getBoilerRate();
  }

  getBoilerRate = () => {
    fetch('https://www.pakpoultryhub.com/api/banner.php')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          date1: json,
          isloading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.backColor}}>
        <Header title="ڈیش بورڈ" navigation={this.props.navigation} />
        <ScrollView>
          <FlatList
            style={styles.FlatListStyles}
            data={this.state.data}
            numColumns={2}
            renderItem={this.renderItem}
            keyExtractor={(key, index) => index.toString()}
          />
          <Text style={styles.rates}>اشتہار</Text>
          <Swiper
            autoplay={true}
            loop={true}
            autoplayDirection={true}
            showsPagination={false}
            style={styles.wrapper}
            showsButtons
            loop={false}>
            {this.state.date1.map((item, i) => {
              <View testID="Simple" style={styles.slide3}>
                <Image source={item.image} style={styles.card} />
              </View>;
            })}

            {this.state.isloading && (
              <ActivityIndicator size={'large'} color="red" />
            )}
          </Swiper>
        </ScrollView>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  card: {
    width: WIDTH / 2.8,
    height: HEIGHT / 6,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
    margin: 5,
  },
  card1: {
    width: WIDTH / 7,
    height: HEIGHT / 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  FlatListStyles: {
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  text: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 16,
  },
  urdutext: {
    fontSize: 16,
    color: colors.textGrey,
    fontSize: 13,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 45,
  },
  touchcard: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  rates: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'center',
    padding: 10,
  },
  mainView: {
    alignItems: 'center',
    marginVertical: 5,
  },
  wrapper: {
    height: 160,
    marginBottom: 20,
  },
  slide1: {
    flex: 1,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
});
