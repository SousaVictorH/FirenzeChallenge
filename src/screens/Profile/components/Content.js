import React from 'react';
import {StyleSheet, View} from 'react-native';

import ProfileSection from './Sections/ProfileSection';
import SocialSection from './Sections/SocialSection';
import CommentSection from './Sections/CommentSection';

import {white} from '../../../resources/colors';

import {users} from '../../../resources/icons';

/**
 * Esse componente exibe o conteúdo da tela de Profile
 *
 * @param {Object} Props              Propriedades recebidas pelo componente
 * @returns
 */
const Content = ({navigation, user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.leftView}>
          <ProfileSection
            avatar={users[user.avatar].path}
            name={user.name}
            contact={user.contact}
            city={user.city}
          />
        </View>
        <View style={styles.rightView}>
          <SocialSection navigation={navigation} user={user} />
        </View>
      </View>
      <View style={styles.commentContainer}>
        <CommentSection comment={user.comment} />
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    position: 'relative',
    backgroundColor: white,
    flexDirection: 'row',
    borderTopLeftRadius: 25,
    marginTop: -45,
  },
  leftView: {
    width: '50%',
    paddingTop: 85,
    paddingLeft: 35,
  },
  rightView: {
    width: '50%',
    paddingTop: 55,
  },
  commentContainer: {
    flex: 1,
  },
});
