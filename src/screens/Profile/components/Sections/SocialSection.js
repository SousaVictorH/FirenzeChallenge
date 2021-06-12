import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import ListModal from '../../../../components/modals/ListModal';
import LikeButton from '../../../../components/buttons/LikeButton';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import Button from '../../../../components/buttons/Button';

import {WHATSAPP, generateAppLink} from '../../../../constants/links';
import {INTERNET_ERROR} from '../../../../constants/errors';
import {black, white} from '../../../../resources/colors';
import {ADD_AMIGO, FRIENDS, LIKES, UNFOLLOW} from '../../../../constants/texts';

import {openURI} from '../../../../interfaces/navigation';
import {utils} from '../../../../resources/icons';

/**
 * Esse componente exibe a sessão social do conteúdo da tela de Profile
 *
 * @param {Object} Props              Propriedades recebidas pelo componente
 * @returns
 */
const SocialSection = ({user}) => {
  const [liked, setLiked] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showFriends, setShowFriends] = useState(false);

  const {number, likes, friends} = user;

  const toggleLike = () => {
    setLiked(!liked);
  };
  const toggleIsFriend = () => {
    setIsFriend(!isFriend);
  };
  const toggleShowLikes = () => {
    setShowLikes(!showLikes);
  };
  const toggleShowFriends = () => {
    setShowFriends(!showFriends);
  };

  /**
   * Essa função abre o whatsapp, caso o usuário não o possua instalado é aberto o link para baixar
   */
  const goToWhatsApp = async () => {
    const link = generateAppLink(number);
    const alternativeLink = WHATSAPP;

    const response = await openURI(link, alternativeLink);

    if (response.error) {
      Alert.alert(INTERNET_ERROR);
    }
  };

  return (
    <>
      <ListModal
        onExit={toggleShowLikes}
        title={LIKES}
        data={likes.list}
        isVisible={showLikes}
      />
      <ListModal
        onExit={toggleShowFriends}
        title={FRIENDS}
        data={friends.list}
        isVisible={showFriends}
      />
      <View style={styles.iconContainer}>
        <LikeButton liked={liked} onPress={toggleLike} />
      </View>
      <View style={styles.inLine}>
        <SimpleButton
          onPress={toggleShowLikes}
          number={likes.amount}
          title={LIKES}
        />
        <SimpleButton
          onPress={toggleShowFriends}
          number={friends.amount}
          title={FRIENDS}
        />
      </View>
      <Button
        iconName={isFriend ? null : 'people'}
        title={isFriend ? UNFOLLOW : ADD_AMIGO}
        onPress={toggleIsFriend}
      />
      <Button
        backgroundColor={white}
        icon={utils.whatsapp.icon}
        title={number}
        textStyle={styles.text}
        iconSize={24}
        style={styles.button}
        onPress={goToWhatsApp}
      />
    </>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  iconContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
    backgroundColor: white,
    borderWidth: 0.9,

    position: 'absolute',
    top: -45,
    right: 10,
  },
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 10,
  },
  button: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  text: {
    color: black,
    marginLeft: 12,
    fontWeight: '700',
    fontSize: 14,
  },
});
