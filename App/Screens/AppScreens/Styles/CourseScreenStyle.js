import {Colors} from '../../../src/Themes';

const {StyleSheet, Dimensions} = require('react-native');

const {width, height} = Dimensions.get('screen');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: height * 0.4,
    backgroundColor: Colors.lightGrey,
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  userDetailsContainer: {
    marginTop: 17,
  },
  trainingContainer: {
    marginTop: 29,
  },
  titleBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 16.3,
    height: 16.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#EDF3FB',
    marginRight: 7,
  },
  courseContentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',
  },
  hashtag: {
    paddingTop: 4.7,
  },
  courseMainScroll: {
    flex: 1,
    zIndex: 2,
    paddingTop: height * 0.4 - 48,
  },
  blockNameCourse: {
    paddingTop: 23,
  },
  blockAboutCourse: {
    paddingTop: 22,
  },
  aboutText: {
    paddingTop: 14,
  },
  bottomCrutch: {
    width: '100%',
    height: height * 0.49 - 55,
  },
});
