import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';

// import { Container } from './styles';

const Publication = () => {
  const route = useRoute();
  const { card } = route.params;
  return (
    <View>
      <TouchableOpacity>
        <Icon name="plus" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Publication;
