import {StyleSheet} from 'react-native';
import {Colors} from '../../src/Themes';

export const Styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingHorizontal: 36,
    marginTop: 30.5
  },
  inputWrapper: {
    width: '100%',
    borderBottomColor: Colors.borderGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    width: '100%',
    paddingBottom: 13,
    paddingTop: 9,
  },
});
