import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './authStack';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen
          options={{header: () => null}}
          name="Auth Stack"
          component={AuthStack}
        
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
