import React from 'react';
import {StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {purpleBar, brownBar} from '../../resources/colors';

/**
 * BarBox serve como um componente que implementa linear gradient no background, mascarando o uso
 * da biblioteca react-native-linear-gradient
 *
 * @param   {Array} colors                Array de 2 posições contendo 2 cores
 * @param   {React.Component} content     Componente de conteúdo
 * @param   {Object} style                Objeto de estilização do componente
 * @param   {Array} orientation           Objeto contendo propriedades x e y numéricas de 0 a 1
 * @param   {React.Component} children    Componentes filhos
 * @returns {React.Component}
 */
const BarBox = ({colors, content, style, orientation, children}) => {
  return (
    <LinearGradient
      start={orientation?.start || {x: 0.5, y: 0.0}}
      end={orientation?.end || {x: 1.0, y: 1.0}}
      colors={colors || [brownBar, purpleBar]}
      style={style || styles.box}>
      {content}
      {children}
    </LinearGradient>
  );
};

export default BarBox;

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: '100%',
  },
});
