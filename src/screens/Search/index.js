import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import {white} from '../../resources/colors';

/**
 * Esse componente exibe a tela de Search
 *
 * @returns {React.Component}
 */
const Search = () => {
  const renderContent = () => (
    <View style={styles.container}>
      <Text>SEARCH</Text>
    </View>
  );

  return <ScreenLaytout content={renderContent()} />;
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
