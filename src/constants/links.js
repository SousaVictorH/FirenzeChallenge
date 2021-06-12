/**
 * Esse arquivo armazena todos os links, e funções que os geram, utilizados pelo aplicativo
 */

export const WHATSAPP = 'http://www.whatsapp.com/';
export const INSTAGRAM = 'https://instagram.com/';

export const generateAppLink = number => {
  return `whatsapp://send?phone=${number}`;
};
