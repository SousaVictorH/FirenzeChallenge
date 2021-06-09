import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Avatar from '../../../components/layouts/Avatar';
import {black, white, purple} from '../../../resources/colors';

import {womans} from '../../../resources/icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Avatar uri={womans[0].path} style={styles.avatar} />
        <Text style={styles.name}>Joana Silva</Text>
        <Text style={styles.link}>@joanasilva_1</Text>
        <Text style={styles.city}>Campina Grande PB, Brasil</Text>
      </View>
      <View style={styles.rightView}>
        <Text>Right Section</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: white,
    flexDirection: 'row',
    maxHeight: 300,
    borderTopLeftRadius: 40,
    marginTop: -45,
  },
  leftView: {
    width: '50%',
    paddingTop: 120,
    paddingLeft: 35,
  },
  avatar: {
    position: 'absolute',
    top: -50,
    left: 20,
  },
  rightView: {
    width: '50%',
    paddingTop: 150,
  },
  name: {
    color: black,
    fontSize: 38,
    fontWeight: '700',
    maxWidth: 180,
  },
  link: {
    color: purple,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
  },
  city: {
    color: black,
    fontSize: 20,
    fontWeight: '300',
    maxWidth: 180,
    marginTop: 10,
  },
});
