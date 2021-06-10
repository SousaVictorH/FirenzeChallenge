import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Avatar from '../../../../components/layouts/Avatar';
import {black, purple} from '../../../../resources/colors';

const Content = ({avatar, name, link, city}) => {
  return (
    <>
      <Avatar uri={avatar} style={styles.avatar} verified />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.link}>{link}</Text>
      <Text style={styles.city}>{city}</Text>
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    top: -50,
    left: 20,
  },
  name: {
    color: black,
    fontSize: 38,
    fontWeight: '700',
    maxWidth: 180,
  },
  link: {
    color: purple,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 8,
  },
  city: {
    color: black,
    fontSize: 18,
    fontWeight: '300',
    maxWidth: 150,
    marginTop: 6,
  },
});
