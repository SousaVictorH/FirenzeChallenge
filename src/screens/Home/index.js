import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {white} from '../../resources/colors';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

const Home = ({navigation}) => {
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
