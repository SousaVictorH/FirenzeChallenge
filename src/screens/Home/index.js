import React from 'react';
import {StyleSheet, View} from 'react-native';

import {white} from '../../resources/colors';

import Header from './components/Header';
import Content from './components/Content';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
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
