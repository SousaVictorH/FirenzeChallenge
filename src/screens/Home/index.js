import React from 'react';
import {View, Text} from 'react-native';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import globalStyles from '../../resources/styles/globalStyles';

/**
 * Esse componente exibe a tela de Home
 *
 * @returns {React.Component}
 */
const Home = () => {
  const renderContent = () => (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>HOME</Text>
    </View>
  );

  return <ScreenLaytout content={renderContent()} />;
};

export default Home;
