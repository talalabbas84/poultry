import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Welcome from '../screens/welcome';
import Verfication from '../screens/verification';
import Signup from '../screens/signup';
import Login from '../screens/login';

import DrawerStack from './drawerAuth';
import Splash from '../screens/splash';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcom"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Screen name="Welcom" component={Welcome} />

      <Stack.Screen name="Signup" component={Signup} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Verfication" component={Verfication} />

      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
