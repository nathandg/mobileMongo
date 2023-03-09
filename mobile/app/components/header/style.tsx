import {StyleSheet} from 'react-native';

const headerHeight = 100;
const iconSize = 30;
const favIconSize = 100;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: headerHeight,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginTop: 1,
  },
  iconContainer: {
    // paddingHorizontal: 10,
    width: iconSize,
    height: iconSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 15,
    height: 22,
    resizeMode: 'contain',
    padding: 12,
  },
  favContainer: {
    position: 'absolute',
    right: '5%',
    top: headerHeight / 2 - favIconSize / 2,
    width: favIconSize,
    height: favIconSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favIcon: {
    height: favIconSize,
    width: favIconSize,
    resizeMode: 'contain',
  },
});
