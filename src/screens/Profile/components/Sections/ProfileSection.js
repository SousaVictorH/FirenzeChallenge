import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Avatar from '../../../../components/layouts/Avatar';
import {black, purple} from '../../../../resources/colors';

const Content = ({avatar, name, contact, city}) => {
  return (
    <>
      <Avatar uri={avatar} style={styles.avatar} verified />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.contact}>{contact}</Text>
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
    fontSize: 27,
    fontWeight: '700',
    maxWidth: 140,
  },
  contact: {
    color: purple,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 8,
    maxWidth: 140,
  },
  city: {
    color: black,
    fontSize: 16,
    fontWeight: '300',
    maxWidth: 140,
    marginTop: 6,
  },
});
