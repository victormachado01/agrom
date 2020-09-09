import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return <Tab.Navigator initialRouteName="Home"></Tab.Navigator>;
};

export default components;
