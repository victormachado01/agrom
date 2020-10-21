import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/Auth';
import api from '../../services/api';
import Styles from './Styles';

const Profile = () => {
  const {signOut} = useAuth();
  const [profile, setProfile] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      api.get('/usuarios/me').then((res) => {
        setProfile(res.data.usuario);
      });
    });
  }, [navigation]);

  async function sair() {
    signOut();
  }

  return (
    <View style={Styles.Container}>
      <View style={Styles.Header}>
        <Text>fotrografia co raça negra</Text>
      </View>
      {profile ? (
        <View style={Styles.Content}>
          <Text style={Styles.Name}> {profile.nome} </Text>
          <Text style={Styles.Contact}> {profile.email}</Text>
          <Text style={Styles.Contact}> {profile.telefone}</Text>
          <TouchableOpacity onPress={() => sair()}>
            <Text style={Styles.Exit}>Sair</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Profile;
