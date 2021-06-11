import React from 'react';
import {StyleSheet, View, Image, BackHandler} from 'react-native';

import Button from '../../../components/buttons/BaseButton';
import Icon from 'react-native-vector-icons/Ionicons';

import {gray} from '../../../resources/colors';
import {images} from '../../../resources/images';

const Header = () => {
  const exitApp = () => {
    // Exit App
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <Button onPress={exitApp} style={styles.icon}>
        <Icon color={gray} size={38} name={'exit'} />
      </Button>
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
  icon: {
    position: 'absolute',
    top: 15,
    right: 18,
    transform: [{rotate: '180deg'}],
    zIndex: 2,
  },
});
