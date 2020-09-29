import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import tractor from '../../assets/tractor.png';

import Styles from './Styles';

const Card = ({navigation}) => {
  return (
    <View>
      <View style={Styles.Container}>
        <TouchableOpacity onPress={() => navigation.navigate('Publication')}>
          <View>
            <Image source={tractor} style={{width: 150, height: 120}} />
          </View>
          <View style={Styles.Info}>
            <Text style={Styles.InfoText}>Tratorista Geral</Text>
            <Text style={Styles.InfoTextSecondary}>Marília-SP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
