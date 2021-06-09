import React from 'react';
import {StyleSheet, View} from 'react-native';

import {white} from '../../resources/colors';

import Header from './components/Header';
import Profile from './components/Profile';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Profile />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
