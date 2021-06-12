import React from 'react';
import {StyleSheet, View} from 'react-native';

import {white} from '../../resources/colors';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import Header from './components/Header';
import Content from './components/Content';

import data from '../../interfaces/data.json';

/**
 * Esse componente exibe a tela de Profile
 *
 * @param {Object} Props              Propriedades recebidas pelo componente
 * @returns
 */
const Profile = ({navigation}) => {
  const renderContent = () => (
    <View style={styles.container}>
      <Header />
      <Content navigation={navigation} user={data.user} />
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
