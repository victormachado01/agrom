import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../pages/Profile';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Perfil" component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
