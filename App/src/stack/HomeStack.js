import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/index';

const Stack = createStackNavigator

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}

export default HomeStack;