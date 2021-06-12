import React from 'react';
import {StyleSheet, Text, Alert} from 'react-native';

import Avatar from '../../../../components/layouts/Avatar';
import Button from '../../../../components/buttons/BaseButton';

import {black, purple} from '../../../../resources/colors';
import {INSTAGRAM} from '../../../../constants/links';
import {openURL} from '../../../../interfaces/navigation';

/**
 * Esse componente exibe a sessão de perfil do conteúdo da tela de Profile
 *
 * @param {Object} Props              Propriedades recebidas pelo componente
 * @returns
 */
const ProfileSection = ({avatar, name, contact, city}) => {
  /**
   * Essa função seguirá o link do usuário, em caso de erro será exibido um alerta
   */
  const followLink = async () => {
    // Open Instagram
    const link = INSTAGRAM + contact;

    openURL(link).catch(() => {
      Alert.alert('Verifique seu acesso à internet!');
    });
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
    left: 26,
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
  },
});
