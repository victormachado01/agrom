import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../screens/Login/Register';
import Login from '../screens/Login/LoginPage/LoginPage';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
}

export default LoginStack;