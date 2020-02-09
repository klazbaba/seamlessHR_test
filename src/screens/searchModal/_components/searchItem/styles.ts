import {StyleSheet} from 'react-native';

import {colors} from '../../../../colors';

export const styles = StyleSheet.create({
  leftIcon: {
    color: colors.lightgrey,
  },
  goArrow: {
    transform: [{rotate: '-45deg'}],
  },
  borderLess: {
    borderBottomWidth: 0,
  },
  listItem: {
    marginVertical: 8,
    marginLeft: 0,
  },
  label: {
    fontWeight: '700',
  },
});
