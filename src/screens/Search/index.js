import React from 'react';
import {View, Text} from 'react-native';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import globalStyles from '../../resources/styles/globalStyles';

/**
 * Esse componente exibe a tela de Search
 *
 * @returns {React.Component}
 */
const Search = () => {
  const renderContent = () => (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>SEARCH</Text>
    </View>
  );

  return <ScreenLaytout content={renderContent()} />;
};

export default Search;
