import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import {white} from '../../resources/colors';

/**
 * Esse componente exibe a tela de Trophies
 *
 * @returns {React.Component}
 */
const Trophies = () => {
  const renderContent = () => (
    <View style={styles.container}>
      <Text>TROPHIES</Text>
    </View>
  );

  return <ScreenLaytout content={renderContent()} />;
};

export default Trophies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
