import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // backgroundColor: '#f0ff',
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
    width: '70%',
  },
});
