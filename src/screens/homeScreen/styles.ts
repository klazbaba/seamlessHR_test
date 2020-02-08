import {StyleSheet} from 'react-native';

import {colors} from '../../colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 16,
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 160,
    marginBottom: 24,
    marginTop: 64
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 32,
    alignSelf: 'stretch',
    borderColor: colors.lightgrey,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mic: {
    marginHorizontal: 16,
    color: colors.green,
  },
  sayHeyText: {
    marginVertical: 16,
    color: colors.grey,
    fontSize: 16,
    marginRight: 8,
  },
  weatherSection: {
    flexDirection: 'row',
    marginTop: 32,
    alignSelf: 'stretch',
    borderRadius: 8,
    padding: 16,
    elevation: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center'
  },
  weatherIcon: {
    color: colors.yellow,
    fontSize: 32,
  },
  moreIcon: {
    color: colors.grey,
    fontSize: 22
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  umbrellaIcon: {
    color: colors.grey,
    marginRight: 8,
    fontSize: 16,
  },
  smallText: {
    fontSize: 12,
  },
  fab: {
    backgroundColor: colors.green,
    height: 40,
    width: 40,
    borderRadius: 20,
    top: 0,
    elevation: 0
  },
});
