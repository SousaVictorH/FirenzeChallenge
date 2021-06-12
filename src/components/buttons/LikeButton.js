import React from 'react';
import {StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import BaseButton from './BaseButton';

import {transparent, black, red} from '../../resources/colors';

/**
 * Esse componente serve como um botão de like pré estilizado
 *
 * @param   {Function} onPress            Função que será executada ao clicar no componente
 * @param   {Object} style                Objeto de estilização do componente
 * @param   {Boolean} liked               Variável que indica o valor booleano do like
 * @returns {React.Component}
 */
const SimpleButton = ({onPress, style, liked}) => {
  return (
    <BaseButton onPress={onPress} style={[styles.container, style]}>
      <Icon
        name={liked ? 'heart' : 'heart-o'}
        color={liked ? red : black}
        size={45}
      />
    </BaseButton>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: transparent,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
