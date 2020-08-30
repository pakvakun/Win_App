import {StyleSheet} from 'react-native';
import {Colors} from '../../../src/Themes';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 36,
    backgroundColor: Colors.white,
    paddingTop: 51,
  },
  title: {
    paddingBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  cell: {
    borderBottomWidth: 1,
    borderColor: Colors.borderGrey,
  },
  cellFocused: {
    borderBottomWidth: 2,
  },
  borderError: {
    borderColor: Colors.red,
  },
  error: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22.1,
  },
  errorText: {
    paddingLeft: 3.7,
  },
  repeat: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  repeatText: {
    marginTop: 26.5,
  },
});
