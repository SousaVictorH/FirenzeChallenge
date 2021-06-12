import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import {white} from '../../resources/colors';

/**
 * Esse componente exibe a tela de Home
 *
 * @returns {React.Component}
 */
const Home = () => {
  const renderContent = () => (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );

  return <ScreenLaytout content={renderContent()} />;
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
