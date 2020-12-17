  import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Login  from '../screens/auth/login' ;
import Home from '../screens/home' ;
import Welcome from '../screens/welcome' ;
import Verfication from '../screens/verification' ;
import Signup from '../screens/signup' ;
import DrawerStack from './drawerAuth' ;
import Splash from '../screens/splash' ;

const Stack = createStackNavigator();

const  AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
          name="Splash"
          component={Splash}
          />

      <Stack.Screen
           name="Welcom"
            component={Welcome} /> 

      <Stack.Screen
           name="Verfication"
            component={Verfication} /> 

      <Stack.Screen
           name="Signup"
            component={Signup} /> 

          <Stack.Screen
           name="DrawerStack"
            component={DrawerStack}/> 


        </Stack.Navigator>
    );
  }

  export default AuthStack;