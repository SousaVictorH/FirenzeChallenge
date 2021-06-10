import React from 'react';
import {Text, StyleSheet} from 'react-native';

import BaseButton from './BaseButton';
import ImageIcon from '../layouts/ImageIcon';

import {purple, white} from '../../resources/colors';

const SimpleButton = ({
  style,
  icon,
  title,
  iconSize,
  textStyle,
  backgroundColor = purple,
}) => {
  return (
    <BaseButton style={[styles.container, {backgroundColor, ...style}]}>
      <ImageIcon _height={iconSize || 32} _width={iconSize || 32} icon={icon} />
      <Text style={textStyle || styles.title}>{title}</Text>
    </BaseButton>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 18,
    marginRight: 17,
    width: '88%',
    height: 48,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 35,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: white,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 8,
  },
});
