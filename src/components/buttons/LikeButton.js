import React from 'react';
import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import BaseButton from './BaseButton';

import {transparent, black, red} from '../../resources/colors';

const SimpleButton = ({onPress, style, liked}) => {
  return (
    <BaseButton onPress={onPress} style={[styles.container, style]}>
      <Icon name={'heart'} color={liked ? red : black} size={45} />
    </BaseButton>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: transparent,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
