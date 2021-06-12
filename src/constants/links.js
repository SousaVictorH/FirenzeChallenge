/**
 * Esse arquivo armazena todos os links, e funções que os geram, utilizados pelo aplicativo
 */

export const WHATSAPP = 'http://www.whatsapp.com/';
export const INSTAGRAM = 'https://instagram.com/';

/**
 * @param {String} number        Número do whatsapp do usuário
 *
 * @returns {String} Link
 */
export const generateAppLink = number => {
  return `whatsapp://send?phone=${number || ''}`;
};

/**
 * @param {String} contact        Contato do instagram do usuário
 *
 * @returns {String} Link do instagram pelo app
 */
export const generateInstagramAppLink = contact => {
  return 'instagram://';
};

/**
 * @param {String} contact        Contato do instagram do usuário
 *
 * @returns {String} Link do instagram pelo navegador
 */
export const generateInstagramLink = contact => {
  return `https://instagram.com/${contact}`;
};
