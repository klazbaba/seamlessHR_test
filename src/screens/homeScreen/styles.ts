import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 16,
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 160,
    marginBottom: 32,
  },
});
