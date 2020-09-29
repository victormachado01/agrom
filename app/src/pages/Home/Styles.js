import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Background: {
    backgroundColor: '#F5FAF7',
    width: '100%',
    height: '100%',
  },
  Header: {
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Text: {
    fontSize: 30,
    color: '#2AA62A',
    fontWeight: '700',
    marginRight: 10,
  },
  Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 15,
  },
});
