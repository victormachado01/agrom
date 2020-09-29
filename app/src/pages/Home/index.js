import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useAuth} from '../../contexts/Auth';

import Styles from './Styles';
import Card from '../../components/Card';

const Home = () => {
  const {signOut} = useAuth();

  return (
    <ScrollView>
      <View style={Styles.Background}>
        <View style={Styles.Header}>
          <Text style={Styles.Text}>Início</Text>
          <Text>Pesquisar</Text>
        </View>
        <View style={Styles.Container}>
          <TouchableOpacity onPress={() => signOut()}>
            <Text>Sair</Text>
          </TouchableOpacity>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
