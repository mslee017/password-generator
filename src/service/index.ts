import { Options } from '../types';
import { NUMBERS, UPPERCASE, LOWERCASE, SYMBOLS } from '../constants';

export const generatePassword = (options: Options) => {
  const allowed = [];

  if (options.uppercase) {
    allowed.push(...UPPERCASE);
  }

  if (options.lowercase) {
    allowed.push(...LOWERCASE);
  }

  if (options.symbols) {
    allowed.push(...SYMBOLS);
  }

  if (options.numbers) {
    allowed.push(...NUMBERS);
  }

  if (allowed.length === 0) {
    throw new Error('Invalid Generation!');
  }

  const characters = [];

  while (characters.length < options.length) {
    const index = Math.floor(Math.random() * allowed.length);
    const character = allowed[index];
    characters.push(character);
  }

  // Options object contains properties we need

  const password = characters.join('');

  return password;
};
