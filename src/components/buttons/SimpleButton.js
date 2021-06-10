import React from 'react';
import {Text, StyleSheet} from 'react-native';

import BaseButton from './BaseButton';
import {gray, darkGray} from '../../resources/colors';

const SimpleButton = ({number, title, onPress}) => {
  return (
    <BaseButton onPress={() => onPress()} style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.title}>{title}</Text>
    </BaseButton>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: darkGray,
    fontSize: 17,
    fontWeight: '700',
  },
  title: {
    color: gray,
    fontSize: 17,
    fontWeight: '300',
  },
});
