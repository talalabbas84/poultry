import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import TextInput from '../../../components/textInput';
import colors from '../../../constants/colors';
import Button from '../../../components/button';
import MiniTextInput from '../../../components/miniTextInput';
import {color} from 'react-native-reanimated';
import {login} from '../../../redux/actions/AuthActions';

class Login extends React.Component {
  state = {
    oneway: true,
    roundTrip: false,
    multiTrip: false,
    oneWayBack: colors.yellow,
    roundTripBack: colors.blue,
    multiTripBack: colors.blue,
  };

  renderOneway = () => {
    if (this.state.oneway) {
      return (
        <View>
          <ScrollView style={{marginBottom: 50}}>
            <View style={{marginVertical: 15}}></View>
            <Text style={s.textStyle}>Origin</Text>
            <TextInput placeholder="Lahore,Pk" />

            <Text style={s.textStyle}>Destination</Text>
            <TextInput placeholder="London UK," />

            <Text style={s.textStyle}>Departure</Text>
            <TextInput placeholder="10 Sep(One way)" />

            <Text style={s.textStyle1}>Travelers</Text>

            <TextInput placeholder="1 Traveler" />

            <TextInput placeholder="Class" />

            <View style={{marginVertical: 10}}></View>

            <Button title="Search" />
          </ScrollView>
        </View>
      );
    }
  };

  renderRoundTrip = () => {
    if (this.state.roundTrip) {
      return (
        <View>
          <ScrollView style={{marginBottom: 50}}>
            <View style={{marginVertical: 15}}></View>

            <Text style={s.textStyle}>Origin</Text>
            <TextInput placeholder="Lahore,Pk" />

            <Text style={s.textStyle}>Destination</Text>
            <TextInput placeholder="London UK," />

            <Text style={s.textStyle}>Departure</Text>
            <View style={s.rowAStyle}>
              <MiniTextInput placeholder="10 Sep" />
              <MiniTextInput placeholder="10 Seps" />
            </View>

            <Text style={s.textStyle1}>Travelers</Text>

            <TextInput placeholder="1 Traveler" />

            <TextInput placeholder="Class" />

            <View style={{marginVertical: 10}}></View>

            <Button title="Search" />
          </ScrollView>
        </View>
      );
    }
  };
  renderMultiCity = () => {
    if (this.state.multiTrip) {
      return (
        <View>
          <ScrollView style={{marginBottom: 50}}>
            <View style={{marginVertical: 10}}></View>

            <Text style={s.textStyle}>Origin</Text>
            <TextInput placeholder="Lahore,Pk" />

            <Text style={s.textStyle}>Destination</Text>
            <TextInput placeholder="London UK," />

            <Text style={s.textStyle}>Departure</Text>
            <TextInput placeholder="London UK," />

            <View style={s.line}></View>
            <Text style={s.stop}>ADD STOP</Text>
            <Text style={s.textStyle1}>Travelers</Text>

            <TextInput placeholder="1 Traveler" />

            <TextInput placeholder="Class" />

            <View style={{marginVertical: 10}}></View>

            <Button title="Search" />
          </ScrollView>
        </View>
      );
    }
  };

  setVisibility(one, two, three, rang1, rang2, rang3) {
    this.setState({
      oneway: one,
      roundTrip: two,
      multiTrip: three,
      oneWayBack: rang1,
      roundTripBack: rang2,
      multiTripBack: rang3,
    });
  }

  render() {
    const {oneWayBack, roundTripBack, multiTripBack} = this.state;
    return (
      <View>
        {/* <Text style={[s.textStyle,{marginVertical:10}]}>Flights</Text> */}
        <View style={s.tab}>
          <TouchableOpacity
            onPress={() =>
              this.setVisibility(
                true,
                false,
                false,
                colors.yellow,
                colors.blue,
                colors.blue,
              )
            }
            style={[s.tabStyle, {backgroundColor: oneWayBack}]}>
            <Text style={s.title}>One-way</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.setVisibility(
                false,
                true,
                false,
                colors.blue,
                colors.yellow,
                colors.blue,
              )
            }
            style={[s.tabStyle, {backgroundColor: roundTripBack}]}>
            <Text style={s.title}>Round-trip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.setVisibility(
                false,
                false,
                true,
                colors.blue,
                colors.blue,
                colors.yellow,
              )
            }
            style={[s.tabStyle, {backgroundColor: multiTripBack}]}>
            <Text style={s.title}>Multi City</Text>
          </TouchableOpacity>
        </View>

        {this.renderOneway()}
        {this.renderRoundTrip()}
        {this.renderMultiCity()}
      </View>
    );
  }
}
export default Login;

const s = StyleSheet.create({
  tab: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    color: colors.green,
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle1: {
    color: colors.blue,
    marginHorizontal: 20,
    fontSize: 25,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  rowAStyle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  line: {
    width: '97%',
    color: 'black',
    height: 2,
    backgroundColor: colors.blue,
    marginTop: 20,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  stop: {
    color: colors.blue,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
