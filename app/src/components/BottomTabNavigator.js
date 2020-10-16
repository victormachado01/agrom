import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

import HomeStack from '../stack/HomeStack';
import AddPubStack from '../stack/AddPubStack';
import Profile from '../stack/ProfileStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2AA62A',
      }}>
      <Tab.Screen name="Início" component={HomeStack} />
      <Tab.Screen
        name="Publicar"
        component={AddPubStack}
        options={{
          title: "",
          tabBarIcon: () => <Icon name="plus" size={40} color="#000" />
        }}
      />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
