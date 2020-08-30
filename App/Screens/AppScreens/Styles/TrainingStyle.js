import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../../src/Themes';

const {width, height} = Dimensions.get('screen');

export const Styles = StyleSheet.create({
  video: {
    width: '100%',
    height: height * 0.62,
    backgroundColor: Colors.lightGrey,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  userDetailsContainer: {
    marginTop: 17,
  },
  block: {
    paddingTop: 23,
  },
  aboutText: {
    paddingTop: 12,
  },
  flexOne: {
    flex: 1,
  },
});
