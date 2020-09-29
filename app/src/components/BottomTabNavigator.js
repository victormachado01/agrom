import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from '../stack/HomeStack';
import AddPubStack from '../stack/AddPubStack';
import Profile from '../stack/ProfileStack';
import LoginStack from '../stack/LoginStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2AA62A',
      }}>
      {/* <Tab.Screen name="Login" component={LoginStack} /> */}
      <Tab.Screen name="Início" component={HomeStack} />
      <Tab.Screen name="Publicar" component={AddPubStack} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
