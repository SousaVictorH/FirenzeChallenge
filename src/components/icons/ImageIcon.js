import React from 'react';
import {Image} from 'react-native';

const ImageIcon = ({
  icon,
  uri,
  height = '100%',
  width = '100%',
  resizeMode = 'contain',
  alignSelf = 'center',
  style,
}) => {
  return (
    <Image
      source={icon || {uri}}
      style={[{height, width, resizeMode, alignSelf}, style]}
    />
  );
};

export default ImageIcon;
