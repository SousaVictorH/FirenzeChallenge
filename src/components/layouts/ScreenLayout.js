import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import BarBox from '../boxes/BarBox';

/**
 * Esse componente serve como layout que padroniza todas as páginas da aplicação
 *
 * @param   {String} content              Componente de conteúdo
 * @param   {Object} scroll               Variável que indica a necessidade de scroll
 * @returns {React.Component}
 */
const ScreenLayout = ({content, scroll}) => {
  const body = () => {
    if (scroll) {
      return <ScrollView>{content}</ScrollView>;
    }
    return content;
  };

  return <BarBox style={styles.container}>{body()}</BarBox>;
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 25,
    paddingTop: 40,
  },
});
