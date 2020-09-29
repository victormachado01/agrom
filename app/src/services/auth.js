import {AsyncStorage} from 'react-native';

export const isAuth = async () => {
  const token = AsyncStorage.getItem('TOKEN');
  return token !== null ? true : false;
};

export const login = async (token) => {
  try {
    await AsyncStorage.setItem('TOKEN', token);
  } catch {
    console.log('unauthorized.');
  }
};

export const logout = async () => {
  await AsyncStorage.clear();
};
