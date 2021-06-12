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

/**
 * Essa função recebe uma uri e uma uri alternativa, tenta abrir a uri e em caso de erro abre a alternativa
 * e em caso de erro reincidente, retorna um objeto com erro
 *
 * @param {*} uri             uri principal
 * @param {*} alternative     uri alternativa
 * @returns {Object}
 */
export const openURI = async (uri, alternative) => {
  try {
    const canOpenURL = await Linking.canOpenURL(uri);

    if (canOpenURL) {
      await Linking.openURL(uri);
    }

    return await Linking.openURL(alternative);
  } catch (error) {
    return {error};
  }
};
