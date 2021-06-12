import React from 'react';
import {Image} from 'react-native';

/**
 * Esse componente serve como um imagem pré estilizada no estilo de ícone
 *
 * @param   {React.Component} icon        Imagem exibida no ícone
 * @param   {Number} height               Altura do ícone
 * @param   {Number} width                Largura do ícone
 * @param   {String} resizeMode           Estilo de redimensionalização
 * @param   {String} alignSelf            Estilo de alinhamento próprio
 * @param   {Object} style                Objeto de estilização do componente
 * @returns {React.Component}
 */
const ImageIcon = ({
  icon,
  height = '100%',
  width = '100%',
  resizeMode = 'contain',
  alignSelf = 'center',
  style,
}) => {
  return (
    <Image
      source={icon}
      style={[{height, width, resizeMode, alignSelf}, style]}
    />
  );
};

export default ImageIcon;
