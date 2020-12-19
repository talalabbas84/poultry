import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../../constants/colors';
import AppStyle from '../../styles';
import {profile} from '../../constants/images';

class Drawer extends React.Component {
  state = {
    count: 0,
  };
  routeTo = (path) => {
    this.props.navigation.closeDrawer();
    this.props.navigation.navigate(path);
  };
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image style={styles.image} source={profile} />
          <View>
            <Text style={styles.name}>JERRY GRIFFIN</Text>
            <Text style={styles.profile}>VIEW PROFILE</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.routeTo('Home')}
          style={styles.row}>
          <Text style={AppStyle.mediumBold}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.routeTo('allAds')}
          style={styles.row}>
          <Text style={AppStyle.mediumBold}>MY ADS</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity 
                      onPress={()=> this.routeTo('CreatePost')}
                    style={styles.row}>
                    <Text style={AppStyle.mediumBold}>CREATE POST</Text>
                </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => this.routeTo('Favourites')}
          style={styles.row}>
          <Text style={AppStyle.mediumBold}>FAVOURITES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.routeTo('HowTouser')}
          style={styles.row}>
          <Text style={AppStyle.mediumBold}>How TO USE</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity 
                
                      onPress={()=> this.routeTo('Rates')}
                    style={styles.row}>
                    <Text style={AppStyle.mediumBold}>RATES</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                      onPress={()=> this.routeTo('Available')}
                    style={styles.row}>
                    <Text style={AppStyle.mediumBold}>Available</Text>
                </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => this.routeTo('Welcom')}
          style={styles.row}>
          <Text style={AppStyle.mediumBold}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Drawer;

const styles = StyleSheet.create({
  header: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    padding: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  profile: {
    color: 'silver',
    fontSize: 15,
  },
  image: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
});
