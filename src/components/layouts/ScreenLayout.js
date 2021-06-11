import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import BarBox from '../boxes/BarBox';

const ScreenLayout = ({content, scroll}) => {
  const body = () => {
    if (scroll) {
      return <ScrollView>{content}</ScrollView>;
    }
    return content;
  };

  return <BarBox style={styles.container}>{body()}</BarBox>;
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 25,
    paddingTop: 40,
  },
});
