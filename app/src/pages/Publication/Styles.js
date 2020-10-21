import {StyleSheet} from 'react-native';

const PrimaryColor = '#313131';
const SecondColor = '#646464';

export default StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
  },
  Header: {
    height: '40%',
    padding: 15,
    backgroundColor: '#c58f5c',
  },
  Content: {
    bottom: 0,
    padding: 30,
    height: '50%',
    width: '100%',
    marginTop: 50,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    position: 'absolute',
    backgroundColor: '#fff',
  },
  Title: {
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: PrimaryColor,
  },
  Desc: {
    fontSize: 18,
    marginBottom: 35,
    textAlign: 'justify',
  },
  SubTitles: {
    fontSize: 20,
    fontWeight: '700',
    color: PrimaryColor,
    marginBottom: 5,
  },
  Data: {
    marginLeft: 26,
    marginBottom: 10,
    color: SecondColor,
  },
});
