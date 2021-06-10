export const WHATSAPP = 'http://www.whatsapp.com/';

export const generateAppLink = number => {
  return `whatsapp://send?phone=${number}`;
};
