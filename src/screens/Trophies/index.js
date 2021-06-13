import React from 'react';
import {View, Text} from 'react-native';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import globalStyles from '../../resources/styles/globalStyles';

/**
 * Esse componente exibe a tela de Trophies
 *
 * @returns {React.Component}
 */
const Trophies = () => {
  const renderContent = () => (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>TROPHIES</Text>
    </View>
  );

  return <ScreenLaytout content={renderContent()} />;
};

export default Trophies;
