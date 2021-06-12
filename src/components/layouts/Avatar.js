import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

import ImageIcon from '../icons/ImageIcon';

import {white} from '../../resources/colors';
import {utils} from '../../resources/icons';

/**
 * Esse componente serve como componente de Avatar básico
 *
 * @param   {String} uri                  Caminho da imagem avatar
 * @param   {Object} style                Objeto de estilização do componente
 * @param   {Boolean} verified            Variável que indica se o ususário é ou não verificado
 * @returns {React.Component}
 */
export default function Avatars({uri, style, verified}) {
  return (
    <View style={[styles.container, style || {}]}>
      <ImageBackground source={uri} style={styles.image} />
      {verified && (
        <ImageIcon icon={utils.verified.icon} style={styles.icon} height={34} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    borderWidth: 10,
    borderColor: white,
    position: 'relative',
  },
  image: {
    resizeMode: 'center',
    height: 120,
    width: 120,
  },
  icon: {
    position: 'absolute',
    right: -40,
    top: 85,
  },
});
