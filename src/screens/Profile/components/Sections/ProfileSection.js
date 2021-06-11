import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Avatar from '../../../../components/layouts/Avatar';
import Button from '../../../../components/buttons/BaseButton';

import {black, purple} from '../../../../resources/colors';
import {openURL} from '../../../../interfaces/navigation';

const Content = ({avatar, name, contact, city}) => {
  const followLink = async () => {
    // Open Instagram
    openURL('https://instagram.com').catch(() => {
      console.log('Verifique seu acesso à internet!');
    });
  };

  return (
    <>
      <Avatar uri={avatar} style={styles.avatar} verified />
      <Text style={styles.name}>{name}</Text>
      <Button style={styles.link} onPress={followLink}>
        <Text style={styles.contact}>{contact}</Text>
      </Button>
      <Text style={styles.city}>{city}</Text>
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    top: -50,
    left: 26,
  },
  link: {
    margin: 0,
  },
  name: {
    color: black,
    fontSize: 28,
    fontWeight: '700',
    maxWidth: 140,
  },
  contact: {
    color: purple,
    fontSize: 14,
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
