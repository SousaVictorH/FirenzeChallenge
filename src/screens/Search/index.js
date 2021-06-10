import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {white} from '../../resources/colors';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

const Search = ({navigation}) => {
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
