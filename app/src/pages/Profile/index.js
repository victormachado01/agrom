import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useAuth} from '../../contexts/Auth';
import Styles from './Styles';

const Profile = () => {
  const {signOut} = useAuth();

  return (
    <View style={Styles.Container}>
      <View style={Styles.Header}>
        <Text> teste </Text>
      </View>
      <View style={Styles.Content}>
        <Text style={Styles.Name}> José Alves </Text>
        <Text style={Styles.Contact}> email@email.com</Text>
        <Text style={Styles.Contact}> 14 4002-8922</Text>
        <TouchableOpacity onPress={() => signOut()}>
            <Text style={Styles.Exit}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
