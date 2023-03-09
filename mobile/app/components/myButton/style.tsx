import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    left: '10%', // 50% - 40% (metade da largura do botão)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    backgroundColor: '#56B721',
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'Poppins-Italic',
    fontWeight: '400',
    fontSize: 20,
    color: '#fff',
  },
});
