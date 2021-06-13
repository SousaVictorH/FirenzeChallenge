import {StyleSheet} from 'react-native';

import {black, white} from '../colors';

/**
 * Objecto de estilo global
 */
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    color: black,
    fontSize: 14,
  },
});

export default globalStyles;
