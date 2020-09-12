import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginStack from '../stack/LoginStack';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Login" component={LoginStack}/>
    </Tab.Navigator>
  );
};