import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import ListModal from '../../../../components/modals/ListModal';
import LikeButton from '../../../../components/buttons/LikeButton';
import SimpleButton from '../../../../components/buttons/SimpleButton';
import Button from '../../../../components/buttons/Button';

import {WHATSAPP, generateAppLink} from '../../../../constants/links';
import {black, white} from '../../../../resources/colors';
import {ADD_AMIGO, FRIENDS, LIKES, UNFOLLOW} from '../../../../constants/texts';

import {openURL} from '../../../../interfaces/navigation';
import {utils} from '../../../../resources/icons';

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

  const goToWhatsApp = async () => {
    try {
      // Try App
      const link = generateAppLink(number);
      const response = await openURL(link);

      if (response.err) {
        throw response.err;
      }
    } catch (error) {
      // No App
      openURL(WHATSAPP);
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
