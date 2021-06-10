import React from 'react';
import {StyleSheet, View} from 'react-native';

import ProfileSection from './Sections/ProfileSection';
import SocialSection from './Sections/SocialSection';
import CommentSection from './Sections/CommentSection';

import {white} from '../../../resources/colors';

import {womans} from '../../../resources/icons';

const Content = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.leftView}>
          <ProfileSection
            avatar={womans[0].path}
            name={'Joana Silva'}
            link={'@joanasilva_1'}
            city={'Campina Grande PB, Brasil'}
          />
        </View>
        <View style={styles.rightView}>
          <SocialSection />
        </View>
      </View>
      <View style={styles.commentContainer}>
        <CommentSection comment={'Especialista em comerciais de moda'} />
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
