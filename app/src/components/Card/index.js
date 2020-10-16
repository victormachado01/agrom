/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import tractor from '../../assets/tractor.png';
import {useNavigation} from '@react-navigation/native';

import Styles from './Styles';

const Card = (props) => {
  const navigation = useNavigation();
  const {nome, cidade} = props.info;
  return (
    <View>
      <View style={Styles.Container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Publication', {
          card: props.info
        })}>
          <View>
            <Image source={tractor} style={{width: 150, height: 120}} />
          </View>
          <View style={Styles.Info}>
            <Text style={Styles.InfoText}>{nome}</Text>
            <Text style={Styles.InfoTextSecondary}>{cidade}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
