import React from 'react';
import {Text, StyleSheet} from 'react-native';

import BaseButton from './BaseButton';
import {gray, darkGray} from '../../resources/colors';

/**
 * Esse componente serve como um botão simples contendo número e titulo
 *
 * @param   {Number} number               Número que será exibido
 * @param   {String} title                Título que será exibido
 * @param   {Function} onPress            Função que será executada ao clicar no componente
 * @returns {React.Component}
 */
const SimpleButton = ({number, title, onPress}) => {
  return (
    <BaseButton onPress={() => onPress()} style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.title}>{title}</Text>
    </BaseButton>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: darkGray,
    fontSize: 17,
    fontWeight: '700',
  },
  title: {
    color: gray,
    fontSize: 17,
    fontWeight: '300',
  },
});
