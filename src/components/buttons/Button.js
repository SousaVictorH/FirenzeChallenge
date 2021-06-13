import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import BaseButton from './BaseButton';
import ImageIcon from '../icons/ImageIcon';

import {darkPurple, white} from '../../resources/colors';

/**
 * Esse componente serve como um botão pré estilizado
 *
 * @param   {Object} style                Objeto de estilização do componente
 * @param   {React.Component} icon        Componente de ícone do botão
 * @param   {String} iconName             Nome do ícone do botão
 * @param   {String} color                Cor do ícone
 * @param   {String} title                Título exibido no botão
 * @param   {Number} iconSize             Tamanho do ícone
 * @param   {Object} textStyle            Objeto de estilo do texto
 * @param   {String} backgroundColor      Cor de fundo do botão
 * @param   {Function} onPress            Função que será executada ao clicar no componente
 * @returns {React.Component}
 */
const Button = ({
  style,
  icon,
  iconName,
  color = white,
  title,
  iconSize = 25,
  textStyle,
  backgroundColor = darkPurple,
  onPress,
}) => {
  return (
    <BaseButton
      onPress={onPress}
      style={[styles.container, {backgroundColor, ...style}]}>
      {icon && <ImageIcon height={iconSize} width={iconSize} icon={icon} />}
      {iconName && (
        <Icon
          style={styles.icon}
          name={iconName}
          size={iconSize}
          color={color}
        />
      )}
      <Text style={textStyle || styles.title}>{title}</Text>
    </BaseButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 18,
    marginRight: 17,
    width: '88%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: white,
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    marginRight: 10,
  },
});
