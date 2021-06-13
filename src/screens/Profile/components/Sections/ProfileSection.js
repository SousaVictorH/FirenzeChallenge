import React from 'react';
import {Alert, StyleSheet, Text} from 'react-native';

import Avatar from '../../../../components/layouts/Avatar';
import Button from '../../../../components/buttons/BaseButton';

import {black, purple} from '../../../../resources/colors';
import {
  generateInstagramAppLink,
  generateInstagramLink,
} from '../../../../constants/links';
import {INTERNET_ERROR} from '../../../../constants/errors';

import {openURI} from '../../../../interfaces/navigation';

/**
 * Esse componente exibe a sessão de perfil do conteúdo da tela de Profile
 *
 * @param {Object} Props              Propriedades recebidas pelo componente
 * @returns
 */
const ProfileSection = ({avatar, name, contact, city}) => {
  /**
   * Essa função abre o instagram, caso o usuário não o possua instalado é aberto o link no navegador
   */
  const followLink = async () => {
    const link = generateInstagramAppLink(contact);
    const alternativeLink = generateInstagramLink(contact);

    const response = openURI(link, alternativeLink);

    if (response.error) {
      Alert.alert(INTERNET_ERROR);
    }
  };

  return (
    <>
      <Avatar uri={avatar} style={styles.avatar} verified />
      <Text style={styles.name}>{name}</Text>
      <Button style={styles.link} onPress={followLink}>
        <Text style={styles.contact}>{contact}</Text>
      </Button>
      <Text style={styles.city}>{city}</Text>
    </>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    top: -50,
    left: 22,
  },
  link: {
    margin: 0,
  },
  name: {
    color: black,
    fontSize: 28,
    fontWeight: '700',
    maxWidth: 140,
  },
  contact: {
    color: purple,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 8,
    maxWidth: 140,
  },
  city: {
    color: black,
    fontSize: 16,
    fontWeight: '300',
    maxWidth: 140,
    marginTop: 6,
    fontStyle: 'italic',
  },
});
