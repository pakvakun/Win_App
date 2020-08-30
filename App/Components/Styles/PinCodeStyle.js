import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../src/Themes';

export const Styles = StyleSheet.create({
  sendCodeCodeField: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  pinDigitContainer: {
    borderWidth: 1,
    height: 46,
    width: 46,
    marginHorizontal: 5,
    borderRadius: 1000,
  },
  pinDidgit: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinDidgitInput: {
    // fontFamily: `${Fonts}-Medium`,
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
  },
  pinError: {
    // fontFamily: `${Fonts}-Medium`,
    fontSize: 12,
    color: Colors.Red,
    paddingTop: 10,
  },
});
