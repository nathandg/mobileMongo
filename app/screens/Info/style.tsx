import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    paddingHorizontal: 30,
  },
  icon: {
    width: 90,
  },
  infos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Economica',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 30,
  },
  text: {
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 26,
  },
  lottie: {
    height: 320,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 60,
    backgroundColor: '#56B721',
    borderRadius: 20,
  },
  buttonText: {
    fontFamily: 'Economica',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    color: '#fff',
  },
});
