import React from 'react';
import {View} from 'react-native';

import ScreenLaytout from '../../components/layouts/ScreenLayout';

import Header from './components/Header';
import Content from './components/Content';

import globalStyles from '../../resources/styles/globalStyles';
import data from '../../services/data.json';

/**
 * Esse componente exibe a tela de Profile
 *
 * @param {Object} Props              Propriedades recebidas pelo componente
 * @returns
 */
const Profile = ({navigation}) => {
  const renderContent = () => (
    <View style={globalStyles.container}>
      <Header />
      <Content navigation={navigation} user={data.user} />
    </View>
  );

  return <ScreenLaytout content={renderContent()} />;
};

export default Profile;
