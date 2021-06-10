import React from 'react';
import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {purpleBar, brownBar} from '../../resources/colors';

const BarBox = ({colors, content, style, orientation, children}) => {
  return (
    <LinearGradient
      start={orientation ? orientation.start : {x: 0.5, y: 0.0}}
      end={orientation ? orientation.end : {x: 1.0, y: 1.0}}
      colors={colors ? colors : [brownBar, purpleBar]}
      style={style ? style : styles.box}>
      {content}
      {children}
    </LinearGradient>
  );
};

export default BarBox;

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: '100%',
  },
});
