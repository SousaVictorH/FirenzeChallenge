import React from 'react';

import {View, Modal, StyleSheet} from 'react-native';

import {modalBackground} from '../../resources/colors';

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
