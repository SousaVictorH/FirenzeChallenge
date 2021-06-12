/**
 * Esse arquivo armazena todos os ícones baseados em images utilizados pelo aplicativo
 */

const users = [
  {
    path: require('../assets/icons/profile/woman1.png'),
  },
  {
    path: require('../assets/icons/profile/woman2.png'),
  },
  {
    path: require('../assets/icons/profile/man1.png'),
  },
  {
    path: require('../assets/icons/profile/man2.png'),
  },
];

const utils = {
  ['whatsapp']: {
    icon: require('../assets/icons/utils/whatsapp.png'),
  },
  ['verified']: {
    icon: require('../assets/icons/utils/verified.png'),
  },
  ['like']: {
    icon: require('../assets/icons/utils/like.png'),
  },
  ['quotMarks']: {
    icon: require('../assets/icons/utils/aspas.jpg'),
  },
  ['invertQuotMarks']: {
    icon: require('../assets/icons/utils/aspas-invertidas.jpg'),
  },
};

export {users, utils};
