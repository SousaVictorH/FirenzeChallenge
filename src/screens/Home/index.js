import React from 'react';
import {StyleSheet, View} from 'react-native';

import {white} from '../../resources/colors';

import user from '../../interfaces/data.json';

import Header from './components/Header';
import Content from './components/Content';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Content navigation={navigation} user={user} />
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
