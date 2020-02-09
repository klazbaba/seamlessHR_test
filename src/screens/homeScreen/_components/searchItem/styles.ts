import {StyleSheet} from 'react-native';

import {colors} from '../../../../colors';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    alignSelf: 'stretch',
    marginVertical: 16,
    elevation: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  image: {
    width: 100,
    height: 80,
    marginLeft: 16,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  headline: {
    flexShrink: 1,
    fontWeight: '500',
    fontSize: 16,
  },
  content: {
    color: colors.grey,
    maxWidth: '70%',
    marginTop: 8,
  },
  bottomSection: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  googleIcon: {
    fontSize: 20,
    color: colors.googlered,
    marginRight: 8,
  },
  text: {
    color: colors.grey,
  },
  moreIcon: {
    color: colors.grey,
    fontSize: 16,
  },
});
