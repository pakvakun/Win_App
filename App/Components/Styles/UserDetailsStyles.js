import {StyleSheet} from 'react-native';
import {Colors} from '../../src/Themes';

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 27.2,
  },
  photoContainer: {
    width: 68,
    height: 68,
    borderRadius: 68,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.grey
  },
  noPhotoContainer: {
    backgroundColor: Colors.grey,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    marginLeft: 20,
    paddingRight: 30,
  },
});
