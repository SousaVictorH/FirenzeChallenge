import React, {useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import BaseButton from './BaseButton';

import {transparent, black, red} from '../../resources/colors';

/**
 * Esse componente serve como um botão de like pré estilizado
 *
 * @param   {Function} onPress            Função que será executada ao clicar no componente
 * @param   {Object} style                Objeto de estilização do componente
 * @param   {Boolean} liked               Indica o valor booleano do like
 * @param   {Number} size                 Tamanho do ícone
 * @returns {React.Component}
 */
const LikeButton = ({onPress, style, liked, size = 45}) => {
  const currentValue = new Animated.Value(1);

  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  /**
   * Esse useEffect é executado sempre que o valor de like é alterado, animando o botão de
   * like caso o liked seja true.
   */
  useEffect(() => {
    if (liked) {
      Animated.spring(currentValue, {
        toValue: 1.08,
        useNativeDriver: true,
        friction: true,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liked]);

  return (
    <BaseButton onPress={onPress} style={[styles.container, style]}>
      <AnimatedIcon
        name={liked ? 'heart' : 'heart-o'}
        color={liked ? red : black}
        size={size}
        style={{transform: [{scale: currentValue}]}}
      />
    </BaseButton>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: transparent,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
