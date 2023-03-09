import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Dimensions.get('window').height - 100,
  },
  input: {
    width: '100%',
    height: 55,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  errorField: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'red',
    paddingStart: 10,
  },
  FieldContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  FieldLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#000',
    paddingStart: 10,
  },
  lottie: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '90%',
    height: 250,
    maxHeight: Dimensions.get('window').height / 3,
  },
});
