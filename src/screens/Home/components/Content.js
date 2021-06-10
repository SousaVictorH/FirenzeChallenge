import React from 'react';
import {StyleSheet, View} from 'react-native';

import ProfileSection from './Sections/ProfileSection';
import SocialSection from './Sections/SocialSection';
import CommentSection from './Sections/CommentSection';

import {white} from '../../../resources/colors';

import {womans} from '../../../resources/icons';

const Content = ({navigation, user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.leftView}>
          <ProfileSection
            avatar={womans[user.avatar].path}
            name={user.name}
            contact={user.contact}
            city={user.city}
          />
        </View>
        <View style={styles.rightView}>
          <SocialSection navigation={navigation} number={user.number} />
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
    borderTopLeftRadius: 40,
    marginTop: -45,
  },
  leftView: {
    width: '50%',
    paddingTop: 120,
    paddingLeft: 35,
  },
  rightView: {
    width: '50%',
    paddingTop: 90,
  },
  commentContainer: {
    flex: 1,
  },
});
