import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import api from '../../services/api';

import Styles from './Styles';
import Card from '../../components/Card';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get('/servicos?page=0').then((res) => {
      setCards(res.data.servicos);
    });
  }, []);

  return (
    <ScrollView>
      <View style={Styles.Background}>
        <View style={Styles.Header}>
          <Text style={Styles.Text}>Início</Text>
          <Text>Pesquisar</Text>
        </View>
        <View style={Styles.Container}>
          {cards.map((card) => (
            <Card key={card.IDServico} info={card} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
