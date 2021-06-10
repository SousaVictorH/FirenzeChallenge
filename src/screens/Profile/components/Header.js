import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {images} from '../../../resources/images';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={images.london.path} style={styles.image} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '36%',
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'contain',
  },
});
