import React from 'react';
import {TouchableOpacity} from 'react-native';

/**
 * Esse componente tem a funcionalidade de botão básica, que será utilizada em toda aplicação, além
 * de mascarar o uso do TouchableOpaciy do react native
 *
 * @param   {React.Component} content     Componente de conteúdo
 * @param   {Object} style                Objeto de estilização do componente
 * @param   {Function} onPress            Função que será executada ao clicar no componente
 * @param   {React.Component} children    Componentes filhos
 * @returns {React.Component}
 */
const BaseButton = ({content, style = {margin: 10}, onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      {content}
      {children}
    </TouchableOpacity>
  );
};

export default BaseButton;
