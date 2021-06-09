import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {white} from '../../resources/colors';

export default function Avatars({uri, style}) {
  return (
    <View style={[styles.container, style || {}]}>
      <Image source={uri} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    maxWidth: 180,
    maxHeight: 180,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 500,
    borderWidth: 10,
    borderColor: white,
  },
  image: {
    resizeMode: 'cover',
  },
});
