import React from 'react';

import {View, Modal, StyleSheet} from 'react-native';

import {modalBackground} from '../../resources/colors';

/**
 * Esse componente serve como componente de Modal, além de mascarar o uso do Modal do react native
 *
 * @param   {Boolean} isVisible                    Variável que indica visibilidade do modal
 * @param   {React.Component} content              Componente de conteúdo
 * @param   {React.Component} children             Componentes filhos
 * @returns {React.Component}
 */
const BaseModal = ({isVisible, content, children}) => {
  return (
    <Modal animationType="fade" visible={isVisible} transparent>
      <View style={styles.modal}>
        {content}
        {children}
      </View>
    </Modal>
  );
};

export default BaseModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: modalBackground,
  },
});
