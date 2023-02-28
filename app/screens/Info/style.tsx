import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  icon: {
    height: 100,
    width: 100,
  },
  infos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 30,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
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
    fontFamily: 'Poppins-Italic',
    fontWeight: '400',
    fontSize: 20,
    color: '#fff',
  },
});
