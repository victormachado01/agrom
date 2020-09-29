import React from 'react';
import {Text} from 'react-native';
import HomeStack from './HomeStack';
import LoginStack from './LoginStack';
import {useAuth} from '../contexts/Auth';

const Routes = () => {
  const {signed} = useAuth();
  // return <HomeStack />;
  return signed ? <HomeStack /> : <LoginStack />;
  // console.log(signed);
  // return signed ? <HomeStack /> : <LoginStack />;
};

export default Routes;
