import React from 'react';
import {StyleSheet, View} from 'react-native';

import {white} from '../../resources/colors';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import Header from './components/Header';
import Content from './components/Content';

import user from '../../interfaces/data.json';

const Profile = ({navigation}) => {
  const renderContent = () => (
    <View style={styles.container}>
      <Header />
      <Content navigation={navigation} user={user} />
    </View>
  );

  return <ScreenLaytout content={renderContent()} />;
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
