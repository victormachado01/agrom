import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ContainerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  LogoText: {
    fontSize: 35,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  Input: {
    fontSize: 18,
    width: '80%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    margin: 10,
    color: '#fff',
  },
  Button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF860D',
    borderRadius: 7,
    margin: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextBtn: {
    fontSize: 25,
    color: '#fff',
  },
  CadOK: {
    fontSize: 16,
    color: '#fff',
  },
});
