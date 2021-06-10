import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ImageIcon from '../../../../components/layouts/ImageIcon';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import Button from '../../../../components/buttons/Button';

import {black, white} from '../../../../resources/colors';
import {utils} from '../../../../resources/icons';

const Content = () => {
  return (
    <>
      <View style={styles.iconContainer}>
        <ImageIcon style={styles.like} icon={utils.like.icon} />
      </View>
      <View style={styles.inLine}>
        <SimpleButton number={236} title={'Likes'} />
        <SimpleButton number={550} title={'Amigos'} />
      </View>
      <Button icon={utils.whatsapp.icon} title={'Add Amigo'} />
      <Button
        backgroundColor={white}
        icon={utils.whatsapp.icon}
        title={'99 99999-9999'}
        textStyle={styles.text}
        iconSize={24}
        style={styles.button}
      />
    </>
  );
};

export default Content;

const styles = StyleSheet.create({
  iconContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    backgroundColor: white,

    position: 'absolute',
    top: -45,
    right: 10,
  },
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  text: {
    color: black,
    marginLeft: 12,
    fontWeight: '700',
    fontSize: 14,
  },
});
