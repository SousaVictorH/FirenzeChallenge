import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import BaseButton from './BaseButton';
import ImageIcon from '../layouts/ImageIcon';

import {darkPurple, white} from '../../resources/colors';

const SimpleButton = ({
  style,
  icon,
  iconName,
  color = white,
  title,
  iconSize = 25,
  textStyle,
  backgroundColor = darkPurple,
  onPress,
}) => {
  return (
    <BaseButton
      onPress={onPress}
      style={[styles.container, {backgroundColor, ...style}]}>
      {icon && <ImageIcon height={iconSize} width={iconSize} icon={icon} />}
      {iconName && (
        <Icon
          style={styles.icon}
          name={iconName}
          size={iconSize}
          color={color}
        />
      )}
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
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: white,
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    marginRight: 10,
  },
});
