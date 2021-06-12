import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import ImageIcon from '../icons/ImageIcon';
import BaseModal from './BaseModal';
import ListData from '../layouts/Lists/ListData';

import {users} from '../../resources/icons';
import {black, white, lightGray} from '../../resources/colors';

/**
 * Esse componente serve como Modal pré configurado para exibir listas
 *
 * @param   {String} title                Título exibido no modal
 * @param   {Boolean} isVisible           Variável que indica visibilidade do modal
 * @param   {Array} data                  Array de dados
 * @param   {Function} onExit             Função executada ao fechar modal
 * @returns {React.Component}
 */
const ListModal = ({title, isVisible, data = [], onExit}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <ImageIcon
          style={styles.userImage}
          icon={users[item.avatar].path}
          height={35}
          width={35}
        />
        <Text style={styles.userName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <BaseModal isVisible={isVisible}>
      <View style={styles.container}>
        <Icon onPress={onExit} style={styles.icon} name={'cross'} size={35} />
        <Text style={styles.title}>Lista de {title}</Text>
        <View style={styles.listContainer}>
          <ListData data={data} renderItem={renderItem} />
        </View>
      </View>
    </BaseModal>
  );
};

export default ListModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 20,
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  listContainer: {
    flex: 1,
    width: 260,
    overflow: 'scroll',
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 55,
    marginVertical: 5,
    backgroundColor: lightGray,
    borderRadius: 15,
  },
  userImage: {
    marginRight: 14,
  },
  userName: {
    color: black,
    fontSize: 15,
    fontWeight: '400',
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
