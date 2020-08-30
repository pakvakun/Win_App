const {StyleSheet} = require('react-native');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 44,
  },
  button: {
    marginHorizontal: 27,
    marginTop: 22,
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  oferta: {
    paddingTop: 28,
    paddingHorizontal: 46,
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
