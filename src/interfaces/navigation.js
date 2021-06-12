import {Linking} from 'react-native';

/**
 * Essa função recebe uma uri e tenta abrir, em caso de erro retorna um objeto com a propriedade de erro
 *
 * @param   {String} uri                Uri a ser aberta
 * @returns {Object}
 */
export const openURL = async uri => {
  try {
    return await Linking.openURL(uri);
  } catch (err) {
    return {err};
  }
};
