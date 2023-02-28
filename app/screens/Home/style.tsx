import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    // display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 110,
    // backgroundColor: '#ffa',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '500',
    color: '#000',
  },
  headerIcon: {
    width: 80,
    height: 90,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  SavedConnections: {
    marginVertical: 15,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    color: '#000',
    marginLeft: 10,
  },
  subTitle2: {
    fontSize: 11,
    fontFamily: 'Poppins-LightItalic',
    fontWeight: '600',
    color: '#6a6a6a',
    marginLeft: 10,
  },
  RecentConnections: {
    marginVertical: 15,
  },
  RecentHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingEnd: 15,
    maxWidth: '100%',
  },
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
  },
  buttonText: {
    fontFamily: 'Poppins-Italic',
    fontWeight: '400',
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
