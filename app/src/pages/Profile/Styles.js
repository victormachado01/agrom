import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    width: '100%',
    height: '40%',
    backgroundColor: '#2aa62a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Content: {
    width: '100%',
    height: '60%',
    justifyContent: 'flex-start',
    padding: 30,
  },
  Name: {
    fontSize: 35,
    color: '#595959',
    lineHeight: 70,
  },
  Contact: {
    fontSize: 20,
    color: '#595959',
    lineHeight: 40,
  },
  Exit: {
    marginTop: 70,
    fontSize: 20,
    color: '#ff860d',
  },
});
