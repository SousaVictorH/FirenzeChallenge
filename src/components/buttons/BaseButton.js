import React from 'react';
import {TouchableOpacity} from 'react-native';

const BaseButton = ({content, style, onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style || {margin: 10}}>
      {content}
      {children}
    </TouchableOpacity>
  );
};

export default BaseButton;
