import {StyleSheet} from 'react-native';

import {colors} from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  googleIcon: {
    color: colors.googlered,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: colors.lightgrey,
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 16,
    fontSize: 16,
    flex: 1,
  },
  micIcon: {
    color: colors.green,
  },
});
